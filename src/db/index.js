import dotenv from "dotenv" 
import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDb = async ()=>{
    try{
        const connectionInstnce = await mongoose.connect
        (`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDb connected !! Db HOST: ${connectionInstnce.connection.host}`);
    }
    catch(error){
        console.log("MONGODB connection error",error);
        process.exit(1)
    }
}

export default connectDb