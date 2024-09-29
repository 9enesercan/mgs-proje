import { Log, Project } from "@prisma/client";
import { Prisma } from "../database/prisma";
import { Pagination } from "../types";

const CreateProject = async (project : Project) => {
    return await Prisma.project.create({
        data: project
    })
}


const GetAllProjects = async (pagination : Pagination ) : Promise<{pagination: Pagination, projects: Array<Project>}> => {
    const projects = await Prisma.project.findMany({
        skip : pagination.limit * (pagination.page - 1 ),
        take : pagination.limit
    })

    const projectsCount = await Prisma.project.count()

    return {
        projects,
        pagination: {
            ...pagination,
            count: projectsCount
        }
    }
}


const GetProject = async (id : string ) : Promise<Project> => {

    const project = await Prisma.project.findFirst({
        where : {
            id
        },
        select : {
            id: true,
            name:true,
            description:true,
            progress:true,
            createdAt : true,
            startDate : true,
            finishDate : true,
            logs : true,
            customerRequests : true,
            imageURL: true,
            workers : true
        }
    })

    if(!project) throw new Error("Proje bulunamadı")
    
    return project
}


const DelProject = async (id : string ) => {

    const project = await Prisma.project.delete({
        where : {
            id
        }
    })

    if(!project) throw new Error("Proje Silinemedi")
    
    return project
}
const UpdateProject = async (id:string , project : Project) => {
    return await Prisma.project.update({
        data: project,
        where:{
            id
        }
    })
}



export default {
    CreateProject,
    GetAllProjects,
    GetProject,
    DelProject,
    UpdateProject
}