import express from "express";
import { postFreeTrial, deleteFreeTrial, getAllFreeTrial } from "../controller/freeTrialController.js";

import {
    isUserAuthenticated
 } from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", postFreeTrial);
router.get("/getalltrial",isUserAuthenticated, getAllFreeTrial);
router.delete("/:id",isUserAuthenticated, deleteFreeTrial);

export default router;

