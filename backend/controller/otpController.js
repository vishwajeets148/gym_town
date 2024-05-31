import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
// import { Otp } from "../models/otpSchema.js";
import ErrorHandler from "../middlewares/error.js";
import Otp from "../models/otpSchema.js";




import dotenv from "dotenv";
dotenv.config();
import otpVerification from "../utils/otpValidation.js";

import twilio from "twilio";

const accountSid = process.env.ACCOUNTSID
const authToken = process.env.AUTHTOKEN
const twilioPhoneNumber = process.env.TWILIOPHONENUMBER

const client = twilio(accountSid, authToken);
import otpGenerator from "otp-generator";



export const sendOtp = catchAsyncErrors(async (req, res) => {

      try {
        const otp = otpGenerator.generate(4, {
          digits: true,
          alphabets: false,
          upperCase: false,
          specialChars: false,
        });
        console.log("Generated OTP:", otp);
  
        const { phoneNumber } = req.body;
  
        const cDate = new Date();
  
        await Otp.findOneAndUpdate(
          { phoneNumber },
          { otp, otpExperation: new Date(cDate.getTime()) },
          { upsert: true, new: true, setDefaultsOnInsert: true }
        );
  
        const message = await client.messages.create({
          body: `Your OTP for login is: ${otp}`,
          from: twilioPhoneNumber,
          to: "+91" + phoneNumber,
        });
  
        console.log("OTP sent successfully. SID:", message.sid);
  
        return res
          .status(200)
          .json({ Success: true, message: "OTP sent successfully", msg: otp });
      } catch (error) {
        console.error("Error sending OTP:", error);
  
        return res
          .status(400)
          .json({ Success: false, message: "Error sending OTP" });
      }
    })


//  login page

// static async userLogin(req, res) {
//     try {
//       const { phoneNumber } = req.body;

//       // Generate OTP
//       const otp = generateOTP();

//       // Send OTP via Twilio
//       const result = await sendOTP(phoneNumber, otp);

//       if (result.success) {
//         // You may want to store the OTP in a database for verification later
//         return res.status(200).json(result);
//       } else {
//         return res.status(500).json(result);
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       return res
//         .status(500)
//         .json({ success: false, message: "Error during login" });
//     }
//   }

  // Verify Otp

  export const verifyOtp = catchAsyncErrors(async (req, res) => {

    try {
      const { phoneNumber, otp } = req.body;

      const otpData = await Otp.findOne({
        phoneNumber,
        otp,
      });
      if (!otpData) {
        return res.status(400).json({ success: false, message: "Wrong OTP" });
      }

      const isOtpExpired = await otpVerification(otpData.otpExperation);

      if (isOtpExpired) {
        return res
          .status(400)
          .json({ success: false, message: "Your OTP has been Expired!" });
      } else {
        return res
          .status(200)
          .json({ success: true, message: "OTP Verified SuccessFully!" });
      }
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  
})
