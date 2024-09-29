import { User } from "@prisma/client";
import { Prisma } from "../database/prisma";

const Create = async (user : User) => {
    return await Prisma.user.create({
        data: user
    })
}

const FindByUsername = async (username : string) : Promise<User> => {
    const user = await Prisma.user.findUnique({
        where: {
            username,
        }
    })
    if (!user) throw new Error("Kullanıcı bulunamadı");
    return user
}

export default {
    Create,
    FindByUsername
}