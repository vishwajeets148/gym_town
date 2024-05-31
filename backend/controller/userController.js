import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { User } from "../models/userSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { generateToken } from "../utils/jwtToken.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


export const userRegister = catchAsyncErrors(async (req, res, next) => {

    const avatarLocalPath = req.files?.avatar[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required");
      }
    
      const avatar = await uploadOnCloudinary(avatarLocalPath);

      if (!avatar) {
        throw new ApiError(400, "Avatar file is required");
      }


  const { name, email, phone, password } = req.body;

           console.log(req.body)
  if (
    !name ||
    !email ||
    !phone ||
    !password  ||
   !avatar
  ) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const isRegistered = await User.findOne({ email });
  if (isRegistered) {
    return next(new ErrorHandler("User already Registered!", 400));
  }


  const user = await User.create({
    name,
    email,
    phone,
    password,
    avatar: avatar.url,
  });
  generateToken(user, "User Registered!", 200, res);
});

export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password ) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }
 
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email Or Password!", 400));
  }

  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid Email Or Password!", 400));
  }
  generateToken(user, "Login Successfully!", 201, res);
});




export const getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
  });
});



// Logout function for frontend

export const logoutUser = catchAsyncErrors(async (req, res, next) => {

  res
    .status(200)
    .cookie("token" , "", {
      expires: new Date(Date.now()),
      httpOnly: true,
     
    })
    
    .json({
      success: true,
      message: "User Logged Out Successfully.",
      user: req.user,

    
    });
});

