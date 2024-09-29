import { Log } from "@prisma/client"
import { Prisma } from "../database/prisma"

const CreateLog = async(log :Log) =>{
    return await Prisma.log.create({
        data: log
    })
}

const GetLogsByProject = async(projectId : string) => {
    return await Prisma.log.findMany({
        where : {
            projectId
        }
    })
}

const GetLog = async(id : string) => {
    return await Prisma.log.findFirst({
        where : {
            id
        }
    })
}

const UpdateLog = async(log : Log) => {
    return await Prisma.log.update({
        where : {
            id : log.id
        },
        data : log
    })
}

const DelLog = async(id : string) => {
    return await Prisma.log.delete({
        where : {
            id
        }
    })
}


export default {
    CreateLog,
    GetLogsByProject,
    GetLog,
    UpdateLog,
    DelLog
}