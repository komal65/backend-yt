// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config()

connectDB()






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