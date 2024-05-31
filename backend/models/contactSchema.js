import mongoose from "mongoose";
import validator from "validator";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [5, "Name Must Contain At Least 5 Characters!"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide A Valid Email!"],
  },
  message: {
    type: String,
    required: true,
    minLength: [10, "Message Must Contain At Least 10 Characters!"],
  },
});

export const Contact = mongoose.model("Contact", contactSchema);