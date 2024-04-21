import mongoose, { Schema }  from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";



const userSchema= mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
        },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String, //cloudinary service use to store4
        required:true,
    },
    coverImage:{
        type:String,
        required:true

    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,'Password is required'],
       
    },
    refreshToken:{
        type:String
    }
},{timestamps:true});



userSchema.pre("save" , async function(next){
    if( !this.isModified("password")) return next();
    //use to encrypt password at the time of password saving into database
    this.password =  bcrypt.hash(this.password,10);
    next();
})
//check if password enter by user and encrypted is same or not 
userSchema.methods.isPasswordCorrect = async function(password){
 return await bcrypt.compare(password, this.password)
}


userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id:this._id,
            email: this.email,
            username:this.username,
            fullname:this.fullname

        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefereshToken = function(){
    return jwt.sign(
        {
            _id:this._id,
           

        },
        process.env.REFERESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFERESH_TOKEN_EXPIRY
        }
    )
}

export const User= mongoose.model("User",userSchema);