import { Router } from "express";
import {uploadFile, upload } from "../controllers/fileUploadController.js";

const app = Router()

app.post("/", upload.single('file'), uploadFile)

export default app