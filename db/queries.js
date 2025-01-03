import { PrismaClient }  from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserByName(username){
    const user = await prisma.users.findFirst({
        where: {
            username: username
        }
    })

    return user;
}

export async function getUserByID(id){
    const user = await prisma.users.findFirst({
        where: {
            id: id
        }
    })

    return user; 
}

export async function createUser(username, password){
    await prisma.users.create({
        data: {
            username: username,
            password: password
        }
    })
}

export async function createFolder(folderName){
    await prisma.folder.create({
        data:{
            name: folderName
        }
    })
}

export async function getFolders(){
    const folders = await prisma.folder.findMany();
    return folders
}

export async function deleteFolder(id){
    await prisma.folder.delete({
        where: {
            id: parseInt(id)
        }
    })
}

export async function getFiles(id){
    const files = await prisma.file.findMany({
        where:{
            folderId: parseInt(id)
        }
    })

    return files
}

export async function createFile(fileName, url,folderId){
    const file = await prisma.file.create({
        data:{
            fileName,
            url,
            folderId: parseInt(folderId)
        }
    })

    return file;
}


export async function deleteFile(fileId){
    await prisma.file.delete({
        where:{
            id: fileId
        }
    })
}
