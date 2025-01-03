import { Router } from "express";
import { getHome, postFolder, deleteFolderController, getFolderController, postFile, deleteFileController} from "../controllers/homeController.js"
import {upload, uploadFile} from "../controllers/fileUploadController.js"

const router = Router()

router.get("/", getHome);


router.get("/:id/delete", deleteFolderController);
router.get("/folder/:id", getFolderController);          

router.post("/newFolder", postFolder);
router.post("/:id/newFile", postFile);

router.get("/:folderId/:fileId/delete", deleteFileController);
router.post("/folder/:folderId/newFile", upload.single('file'), uploadFile)
export default router;
