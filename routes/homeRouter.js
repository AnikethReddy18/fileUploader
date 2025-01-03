import { Router } from "express";
import { getHome, postFolder, deleteFolderController, getFolderController} from "../controllers/homeController.js"
import {upload, uploadFile, deleteFileController} from "../controllers/fileController.js"

const router = Router()

router.get("/", getHome);


router.get("/:id/delete", deleteFolderController);
router.get("/folder/:id", getFolderController);          

router.post("/newFolder", postFolder);


router.get("/:folderId/:fileId/delete", deleteFileController);
router.post("/folder/:folderId/newFile", upload.single('file'), uploadFile)
export default router;
