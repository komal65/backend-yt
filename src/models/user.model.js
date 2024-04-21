// Import necessary modules
import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Define the user schema
const userSchema = mongoose.Schema({
    // Username field with unique, lowercase, trim, and index properties
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    // Email field with unique, lowercase, and trim properties
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    // Password field with unique, lowercase, and trim properties
    password: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    // Fullname field with trim and index properties
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    // Avatar field
    avatar: {
        type: String,
        required: true
    },
    // Cover image field
    coverImage: {
        type: String,
        required: true
    },
    // Watch history field referencing the Video model
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    // Password field with required property
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    // Refresh token field
    refreshToken: {
        type: String
    }
}, { timestamps: true });

// Pre-save middleware to encrypt the password before saving it to the database
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Method to check if the provided password matches the encrypted password
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Method to generate an access token
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );
};

// Method to generate a refresh token
userSchema.methods.generateRefereshToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFERESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFERESH_TOKEN_EXPIRY
        }
    );
};

// Export the User model
export const User = mongoose.model("User", userSchema);