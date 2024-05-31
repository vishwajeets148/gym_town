import express from "express";
import {sendContact,  getAllContact, deleteContact} from '../controller/contactController.js'

import {
    isUserAuthenticated
 } from "../middlewares/auth.js";

const router = express.Router();

router.post("/contact", sendContact);
router.get("/getallcontact",isUserAuthenticated, getAllContact);
router.delete("/:id",isUserAuthenticated, deleteContact);


export default router;