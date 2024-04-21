// Import the mongoose library
import mongoose, { Schema, mongo } from "mongoose";

// Import the mongoose-aggregate-paginate-v2 plugin
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

// Define the videoSchema using the Schema constructor from mongoose
const videoSchema = new Schema(
   {
      // Define the videoFile property as a String and set it as required
      videoFile: {
         type: String,
         required: true,
      },

      // Define the thumbnail property as a String and set it as required
      thumbnail: {
         type: String,
         required: true,
      },

      // Define the description property as a String and set it as required
      description: {
         type: String,
         required: true,
      },

      // Define the duration property as a Number and set it as required
      duration: {
         type: Number,
         required: true,
      },

      // Define the views property as a Number and set a default value of 0
      views: {
         type: Number,
         default: 0,
         required: true,
      },

      // Define the ispublished property as a Boolean and set a default value of true
      ispublished: {
         type: Boolean,
         default: true,
      },

      // Define the owner property as a Schema.Types.ObjectId and set a ref to the User model
      owner: {
         type: Schema.Types.ObjectId,
         ref: "User",
      },
   },

   // Set timestamps to true to automatically add createdAt and updatedAt fields
   { timestamps: true }
);

// Add the mongoose-aggregate-paginate-v2 plugin to the videoSchema
videoSchema.plugin(mongooseAggregatePaginate);

// Export the Video model using the videoSchema and the name "Video"
export const Video = mongoose.model("Video", videoSchema);