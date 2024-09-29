import { NextFunction, Request, Response } from "express";

export const ErrorHandleMiddleware = async (e: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(400).json({
        "message": e.message
    })
    return
}