import multer from "multer";
import cloudinary from "../cloudinary.js";
import fs from "fs"
import {createFile, deleteFile, getFile} from "../db/queries.js"


export const upload = multer({ dest: "temp/" });

export async function uploadFile(req, res){ 
  
    const { originalname, path } = req.file;
    
    const result = await cloudinary.uploader.upload(path, {folder: 'uploaded_files'});

    fs.unlinkSync(path);
  
    await createFile(originalname, result.public_id,result.secure_url, req.params.folderId)

    res.redirect("/folder/"+req.params.folderId)
}

export async function deleteFileController(req, res){
  const file = await getFile(req.params.fileId)
  const result = await cloudinary.uploader.destroy(file.public_id)
  await deleteFile(req.params.fileId)
  res.redirect("/folder/"+req.params.folderId)
}