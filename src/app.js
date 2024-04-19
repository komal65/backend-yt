import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { config } from './config';

import { router } from './routes';
const app = express();

//middleware for cros origin platform
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

//limit the intake of json data
app.use(express.json({limit:"20kb"}))

//to get data from url also
app.use(express.urlencoded({extended:true , limit:"16kb"}))

//use to store data ststicly data consist pdf, files. to store data on local server
app.use(express.static("public"))

//to config cookieparser
app.use(cookieParser())
export default app; 