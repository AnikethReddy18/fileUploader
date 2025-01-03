import { getFolders, createFolder, deleteFolder, getFiles, createFile, deleteFile } from "../db/queries.js"

export async function getHome(req, res){
    if(req.isUnauthenticated()){
        res.redirect("/login")
    }
    else{
        const folders = await getFolders()
        res.render("home", {folders})
    }
}

export async function postFolder(req, res){
    await createFolder(req.body.folderName);
    res.redirect("/")
}

export async function deleteFolderController(req, res){
    await deleteFolder(req.params.id)
    res.redirect("/")
}

export async function getFolderController(req, res){
    const folderID = req.params.id;

    const files = await getFiles(folderID)
    res.render("files", {folderID, files})
}
