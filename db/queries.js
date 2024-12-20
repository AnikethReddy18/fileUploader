import { PrismaClient }  from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserByName(username){
    await prisma.users.findFirst({
        where: {
            username: username
        }
    })
}

export async function createUser(username, password){
    await prisma.users.create({
        data: {
            username: username,
            password: password
        }
    })
}