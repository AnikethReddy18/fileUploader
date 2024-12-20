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