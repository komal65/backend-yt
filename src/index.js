// Import the dotenv module
import dotenv from "dotenv"

// Import the connectDB function from the db/index.js file
import connectDB from "./db/index.js";

// Call the config method of the dotenv module to load environment variables from the.env file
// This allows the application to access environment variables defined in the.env file
dotenv.config()

// Call the connectDB function to connect to the MongoDB database
// This establishes a connection to the MongoDB database specified in the MONGODB_URI environment variable
connectDB()
.then(()=>{
    // Start the Express server and listen on the port specified in the environment variables
    // or port 8000 if no port is specified
    app.listen(process.env.PORT ||8000, ()=>{
        // Log a message to the console indicating that the server is running and the port it is listening on
        console.log(`Server is running at port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    // Log an error message if the connection to the MongoDB database fails
    console.log("Mongodb connection failed!!", err)
})

































// import express from "express";
// const app = express()

// (async ()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        application.on("error",(error)=>{
//         console.log("Error" ,error);
//         throw error
//        })
//        application.listen(process.env.PORT ,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`);
//        })
    
//     }
//     catch(error){
//         console.error("ERROR",error)
//         throw err
//     }
// })()