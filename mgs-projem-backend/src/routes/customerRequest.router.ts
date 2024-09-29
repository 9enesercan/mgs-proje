import { Router } from "express";
import { createCustomerRequest, delCustomerRequest, getCustomerRequest, getCustomerRequestsByProject, updateCustomerRequest } from "../controllers/customerRequest.controller";

const router = Router();

router.post("/", createCustomerRequest);
router.get("/project/:id", getCustomerRequestsByProject);
router.get("/:id", getCustomerRequest);
router.put("/", updateCustomerRequest);
router.delete("/:id", delCustomerRequest);



export default router