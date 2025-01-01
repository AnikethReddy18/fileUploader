import { Router } from "express";
import { getHome, postFolder, deleteFolderController, getFolderController, postFile, deleteFileController} from "../controllers/homeController.js"


const router = Router()

router.get("/", getHome)

router.get("/:id", getFolderController)

router.post("/newFolder", postFolder)

router.get("/:id/delete", deleteFolderController)

router.post("/:id/newFile", postFile)

router.get("/:folderId/:fileId/delete", deleteFileController)
export default router;