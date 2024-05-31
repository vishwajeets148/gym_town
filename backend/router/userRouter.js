import express from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
  getUserDetails,
  login,
  logoutUser,
  userRegister,
} from "../controller/userController.js";
import {
  isUserAuthenticated
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/users/register", upload.fields([
    {
 name: "avatar",
 maxCount: 1

}]), userRegister);
router.post("/login", login);
router.get("/users/me", isUserAuthenticated, getUserDetails);
router.post("/users/logout", isUserAuthenticated, logoutUser);


export default router;