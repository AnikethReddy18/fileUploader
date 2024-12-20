import { Router } from "express";
import { getLogin } from "../controllers/loginController.js";
import passport from "passport";

const router = Router()

router.get("/", getLogin)
router.post("/", passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/login"
}))

export default router