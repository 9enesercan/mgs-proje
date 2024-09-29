import { Prisma } from "../database/prisma";

export default async function () {
    console.log("Admin kullanıcısı database'e kaydediliyor");
    await Prisma.user.create({
        data: {
            username: "admin",
            password: "123",
        }
    })
    console.log("Admin database'e kaydedildi");
}