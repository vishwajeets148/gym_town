import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";

import { Contact } from "../models/contactSchema.js";
import nodemailer from 'nodemailer';

import dotenv from 'dotenv'
dotenv.config()

export const sendContact = catchAsyncErrors(async (req, res, next) => {
  const { name, email, message } = req.body;
 
  if (!name || !email || !message) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  await Contact.create({ name, email, message });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {

      user: process.env.HOST_EMAIL,
      pass: process.env.HOST_PASSWORD,
    },
  });

    // Email options for notifying admin/owner

  const adminMailOptions = {
    from: '',
    to: ['vishwajeets142@gmail.com'],
    subject: 'Incoming mail from GYM TOWN',
    html: `<p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>`,
  };

   // Email options for sending confirmation to the user
   const userMailOptions = {
    from: process.env.HOST_EMAIL,
    to: email,
    subject: 'We have received your message',
    html: `
   
      <p>Dear ${name},</p>
      <p>Thank you for contacting us. We have received your message and will get back to you shortly.</p>
      <p><strong>Your Message:</strong></p>
      <p>${message}</p>
      <p>Best regards,<br/>Your Company</p>`,
  };


  transporter.sendMail(adminMailOptions, (error) => {
    if (error) {
      console.error('Error sending admin email:', error);
      return res.status(500).json({ status: false, error: 'Error sending email to admin' });
    } else {
      console.log('Mail sent, check your mail on update section');
      return res.status(200).json({ status: true, msg: 'Registered successfully' });
    }
   })

     // Send confirmation email to the user
  transporter.sendMail(userMailOptions, (error) => {
    if (error) {
      console.error('Error sending user email:', error);
      return res.status(500).json({ status: false, error: 'Error sending confirmation email to user' });
    } else {
      console.log('Confirmation email sent to user');
    }
  });
  
  res.status(200).json({
    success: true,
    message: "Message Sent!",
  });
});


export const getAllContact = catchAsyncErrors(async (req, res, next) => {
  const contact = await Contact.find();
  res.status(200).json({
    success: true,
    contact,
  });
});


export const deleteContact = catchAsyncErrors(async (req, res) => {
  
  const { id } = req.params;
  console.log(id)
 
  const contact = await Contact.findById(id);

  if (!contact) {
    return next(new ErrorHandler("Contact Not Found!", 404));
  }

  await Contact.findByIdAndDelete(id);
  
  res.status(200).json({
    success: true,
    message: "Contact Deleted!",
    contact

  });
});