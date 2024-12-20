import { Router } from "express";
import { getSignup } from "../controllers/signupController.js";

const router = Router();

router.get("/", getSignup)

export default router