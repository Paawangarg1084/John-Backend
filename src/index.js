// require('dotenv').config({path: '/./env'})
import dotenv from "dotenv" 
import mongoose, { connect } from "mongoose"
import { DB_NAME } from "./constant.js";
import connectDb from "./db/index.js";


dotenv.config({
    path:'./.env'
})

connectDb()






















/*
import express from "express"
const app = express()

(async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",()=>{
        consol.log("ERROROR: ",error);
        throw error
       })

       app.listener(process.env.PORT,()=>{{
        console.log(`app is listening on port ${process.env.PORT}`)
       }})
    }
    catch(error){
        console.error("ERROR: ",error)
        throw err
    }
})()

*/