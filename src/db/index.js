// Import the mongoose library
import mongoose from "mongoose";

// Import the database name constant from the constants.js file
import { DB_NAME } from "../constants.js";

// Define an asynchronous function called connectDB
const connectDB = async () => {

   // Try to connect to the database using mongoose.connect()
   // and await the result
   try {
      // Connect to the database using the MongoDB URI and the database name
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

      // Log a success message to the console, including the host of the connection
      console.log(`\n Mongodb connected!!! DB HOST: ${connectionInstance.connection.host}`);

   // If there is an error connecting to the database, catch it and log it to the console
   } catch (error) {
      console.log('Mongodb connection error :>> ', error);

      // Exit the process with a status code of 1, indicating an error
      process.exit(1);
   }
}

// Export the connectDB function as the default