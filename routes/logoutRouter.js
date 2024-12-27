import { Router } from "express";
import {logout} from "../controllers/logoutController.js"

const app = Router();

app.get("/", logout)

export default app