import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser';



// Middleware to authenticate frontend users
export const isUserAuthenticated = catchAsyncErrors(
  async (req, res, next) => {
    //  const token = req.cookies.userToken;
     const {token}  = req.cookies;

     console.log("Token from cookies:", token);
    
     if (!token) {
      return next(new ErrorHandler("User is not authenticated!", 401));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    if (!req.user) {
      return next(new ErrorHandler("User not found!", 404));
    }

    console.log("Authenticated user:", req.user);
    
    next();
  }
);