import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()


const connectDB = async()=>{
   
    try{
 const connectionInstance = await  mongoose.connect(process.env.MONGODB_URI, {
         dbName: "Gym",
       })
 console.log(`MongoDB Connected:  ${connectionInstance.connection.host}`)
    }
    catch(error){
          console.log("MongoDB Connection Error " + error)
          process.exit(1)
    }

}

export default connectDB