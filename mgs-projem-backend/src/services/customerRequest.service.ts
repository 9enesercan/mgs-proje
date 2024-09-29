import { CustomerRequest } from "@prisma/client"
import { Prisma } from "../database/prisma"

const CreateRequest = async (customerRequest : CustomerRequest) => {
    return await Prisma.customerRequest.create({
        data: customerRequest
    })
}

const GetRequestsByProject = async (projectId : string) => {
    return await Prisma.customerRequest.findMany({
        where : {
            projectId
        }
    })
}

const GetRequest = async (id : string) => {
    return await Prisma.customerRequest.findFirst({
        where : {
            id
        }
    })
}

const UpdateRequest = async (customerRequest : CustomerRequest) => {
    return await Prisma.customerRequest.update({
        where : {
            id : customerRequest.id
        },
        data : customerRequest
    })
}

const DelRequest = async (id : string) => {
    return await Prisma.customerRequest.delete({
        where : {
            id
        }
    })
}

export default {
    CreateRequest,
    GetRequestsByProject,
    GetRequest,
    UpdateRequest,
    DelRequest
}