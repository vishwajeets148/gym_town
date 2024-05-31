import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { FreeTrial } from "../models/freeTrialSchema.js";
import nodemailer from 'nodemailer';

import dotenv from 'dotenv'
dotenv.config()

export const postFreeTrial = catchAsyncErrors(async (req, res, next) => {
  const {first_name, last_name,  email, phone, date } = req.body;
  
  if ( !first_name || !last_name || !email || !phone || !date ) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

      // Check if the email is already registered
      const existingContact = await FreeTrial.findOne({ email });
      if (existingContact) {
        return next(new ErrorHandler("An appointment with this email has already been scheduled pls check email!", 400));
      }


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
        html: `<p><strong>Name:</strong> ${first_name +" " +last_name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${phone}</p>`,
      };
    
       // Email options for sending confirmation to the user
       const userMailOptions = {
        from: process.env.HOST_EMAIL,
        to: email,
        subject: 'Gym Town Free Trial',
        html: `
        <h1>Free Trial Scheduled</h1>
          <p>Dear ${first_name +" " +last_name},</p>
          <p>Thank you for contacting us. We are pleased to inform you that your free trial at our gym has been scheduled on ${date}.</p>
          <p>We look forward to seeing you and helping you achieve your fitness goals. If you have any questions, feel free to reach out.</p>
         
          <p>Best regards,<br/>Gym Town</p>`,
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

 
  const appointment = await FreeTrial.create({
    first_name,
    last_name,
    email,
    phone,
    date

  });
  res.status(200).json({
    success: true,
    appointment,
    message: "Appointment Send!",
  });
});


export const getAllFreeTrial = catchAsyncErrors(async (req, res, next) => {
  const freeTrial = await FreeTrial.find();
  res.status(200).json({
    success: true,
    freeTrial,
  });
});


export const deleteFreeTrial = catchAsyncErrors(async (req, res) => {
  
  const { id } = req.params;
  console.log(id)
 
  const freeTrial = await FreeTrial.findById(id);

  if (!freeTrial) {
    return next(new ErrorHandler("FreeTrial Not Found!", 404));
  }

  await FreeTrial.findByIdAndDelete(id);
  
  res.status(200).json({
    success: true,
    message: "FreeTrial Deleted!",
    freeTrial

  });
});