import { NextFunction, Request, Response } from 'express';
import customerRequestService from '../services/customerRequest.service';
import { CustomerRequest } from '@prisma/client';



export const createCustomerRequest = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const createdCustomerRequest = await customerRequestService.CreateRequest(req.body as CustomerRequest);
        res.status(200).json({
            data: createdCustomerRequest
        });
    } catch (e) {
        next(e)
    }
}

export const getCustomerRequestsByProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const customerRequests = await customerRequestService.GetRequestsByProject(req.params.id);
        res.status(200).json({
            data: customerRequests
        });
    } catch (e) {
        next(e)
    }
}

export const getCustomerRequest = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const customerRequest = await customerRequestService.GetRequest(req.params.id);
        res.status(200).json({
            data: customerRequest
        });
    } catch (e) {
        next(e)
    }
}

export const updateCustomerRequest = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedCustomerRequest = await customerRequestService.UpdateRequest(req.body as CustomerRequest);
        res.status(200).json({
            data: updatedCustomerRequest
        });
    } catch (e) {
        next(e)
    }
}


export const delCustomerRequest = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const customerRequest = await customerRequestService.DelRequest(req.params.id);
        res.status(200).json({
            data: customerRequest
        });
    } catch (e) {
        next(e)
    }
}

export default {
    createCustomerRequest,
    getCustomerRequestsByProject,
    getCustomerRequest,
    updateCustomerRequest,
    delCustomerRequest
}