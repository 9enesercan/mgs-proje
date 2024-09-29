import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import userService from "../services/user.service"
import { GenerateJWTToken } from "../utils/jwt";

export const Login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userBody = req.body as User
        const loggedUser = await userService.FindByUsername(userBody.username);
        
        if (loggedUser.password !== userBody.password) throw new Error("Kullanıcı adı veya şifre yanlış")
    
        return res.status(200).json({
            data: {
                user: loggedUser,
                token: GenerateJWTToken(loggedUser.id)
            }
        })
    } catch (e) {
        next(e)
    }
}