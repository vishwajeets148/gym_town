import mongoose from "mongoose";
import { Mongoose } from "mongoose";

import validator from "validator";

const freeTrialSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "First Name Is Required!"],
    minLength: [5, "First Name Must Contain At Least 5 Characters!"],
  },
  last_name: {
    type: String,
    required: [true, "Last Name Is Required!"],
    minLength: [4, "First Name Must Contain At Least 4 Characters!"],
  },

  email: {
    type: String,
    required: [true, "Email Is Required!"],
    validate: [validator.isEmail, "Provide A Valid Email!"],
  },
  phone: {
    type: String,
    required: [true, "Phone Is Required!"],
    minLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
    maxLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
  },
  date:{
    type: Date
  }

});

export const FreeTrial = mongoose.model("FreeTrial", freeTrialSchema);