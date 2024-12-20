import { PrismaClient }  from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserByName(username){
    await prisma.user.findFirst({
        where: {
            username: username
        }
    })
}