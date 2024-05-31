import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    phoneNumber: String,
    otp: String,
    otpExperation: {
      type: Date,
      default: Date.now,
      get: (otpExperation) => otpExperation.getTime(),
      set: (otpExperation) => new Date(otpExperation),
    },
  
    date: { type: Date, default: Date.now },
  });

const Otp = mongoose.model("otp", otpSchema);
export default Otp;