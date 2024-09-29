import e, { NextFunction, Request, Response } from "express";
import logService from "../services/log.service";
import { Log } from "@prisma/client";





export const CreateLog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const createdLog = await logService.CreateLog(req.body as Log);
        res.status(200).json({
            data: createdLog
        });
    } catch (e) {
        next(e)
    }
}

export const GetLogsByProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const logs = await logService.GetLogsByProject(req.params.id);
        res.status(200).json({
            data: logs
        });
    } catch (e) {
        next(e)
    }
}

export const GetLog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const log = await logService.GetLog(req.params.id);
        res.status(200).json({
            data: log
        });
    } catch (e) {
        next(e)
    }
}

export const UpdateLog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedLog = await logService.UpdateLog(req.body as Log);
        res.status(200).json({
            data: updatedLog
        });
    } catch (e) {
        next(e)
    }
}

export const DelLog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const log = await logService.DelLog(req.params.id);
        res.status(200).json({
            data: log
        });
    } catch (e) {
        next(e)
    }
}