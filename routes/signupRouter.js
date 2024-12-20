import { Router } from "express";
import { getSignup, postSignup } from "../controllers/signupController.js";

const router = Router();

router.get("/", getSignup)
router.post("/", postSignup)

export default router