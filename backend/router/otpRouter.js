import express from 'express';
const router = express.Router();
import {sendOtp, verifyOtp} from '../controller/otpController.js'


// router.post('/login', UserController.userLogin)
router.post('/sendotp', sendOtp)
router.post('/verifyotp', verifyOtp)


export default router

