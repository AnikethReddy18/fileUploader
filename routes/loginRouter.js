import { Router } from "express";
import { getLogin } from "../controllers/loginController.js";

const router = Router()

router.get("/", getLogin)

export default router