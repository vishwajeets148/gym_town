import express from "express";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

import { errorMiddleware } from "./middlewares/error.js";
dotenv.config()


import connectDB from './db/connection.js'
import contactRouter from "./router/contactRouter.js"
import freeTrialRouter from './router/freeTrialRouter.js'
import userRouter from "./router/userRouter.js"

import otpRouter from "./router/otpRouter.js";



app.use(
    cors({
      origin: [process.env.FRONTEND],
      method: ["GET", "POST", "DELETE", "PUT"],
      credentials: true,
    })
  );


  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));


  app.use("/api/v1/message", contactRouter);
  app.use("/api/v1/appointment", freeTrialRouter);
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/otp", otpRouter);

  
  
app.use(errorMiddleware);

connectDB()
  
.then(() => {
      app.listen(process.env.PORT || 6000, () => {
          console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
      })
  })
  .catch((err) => {
      console.log("MONGO db connection failed !!! ", err);
  })


export default app;