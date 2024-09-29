import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"

export const AdminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]
        if (!token) throw new Error()
        jwt.verify(token, process.env.SECRET_KEY!)
        next()
    } catch (e) {
        next(new Error("Bu işlem için yetkiniz yok"))
    }
}