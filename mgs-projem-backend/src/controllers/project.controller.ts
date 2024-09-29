import { NextFunction, Request, Response } from "express"
import projectService from "../services/project.service"
import { Project } from "@prisma/client"
import { Pagination } from "../types";

export const CreateProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const createdProject = await projectService.CreateProject(req.body as Project);
        res.status(200).json({
            data: createdProject
        })
    } catch (e) {
        next(e)
    }
}

export const GetAllProjects = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const pagination:Pagination = {
            limit : parseInt(req.query.limit as string || "10" ),
            page : parseInt(req.query.page as string || "1" ),
            count: 0
        }
        
        
        const projects = await projectService.GetAllProjects(pagination)

        res.status(200).json(
            {
                data:projects
            }
        )

    } catch (e) {
        next(e)
    }
}

export const GetProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        
        const project = await projectService.GetProject(req.params.id)

        res.status(200).json(
            {
                data:project
            }
        )

    } catch (e) {
        next(e)
    }
}

export const DelProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        
        const project = await projectService.DelProject(req.params.id)

        res.status(200).json(
            {
                message:"Proje silindi"
            }
        )

    } catch (e) {
        next(e)
    }
}

export const UpdateProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const project = await projectService.UpdateProject(req.params.id,req.body as Project)
        res.status(200).json(
            {
                data : project 
            }
        )

    } catch (e) {
        next(e)
    }
}