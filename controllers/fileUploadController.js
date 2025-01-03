import multer from "multer";
import cloudinary from "../cloudinary.js";
import fs from "fs"
import { PrismaClient }  from "@prisma/client";
import {createFile} from "../db/queries.js"

const prisma = new PrismaClient()

export const upload = multer({ dest: "temp/" });

export async function uploadFile(req, res){ 
  
    const { originalname, path } = req.file;
    console.log(originalname+ "path: "+path);
    
    const result = await cloudinary.uploader.upload(path, {
        folder: 'uploaded_files', 
      });
  
      fs.unlinkSync(path);
  
      // const file = await prisma.file.create({
      //   data: {
      //     name: result.secure_url,
      //     folderId: parseInt(req.params.folderId)
      //   },
      // });
      const file = await createFile(originalname, result.secure_url, req.params.folderId)

    res.redirect("/folder/"+req.params.folderId)
}
