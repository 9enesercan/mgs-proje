import { Router } from "express";
import { CreateLog, DelLog, GetLog, GetLogsByProject } from "../controllers/log.controller";
import { AdminMiddleware } from "../middleware/admin.middleware";


const router = Router();

router.post("/", AdminMiddleware ,CreateLog);
router.get("/GetLogsByProject/:id" ,GetLogsByProject);
router.get("/:id" ,GetLog);
router.put("/", AdminMiddleware ,CreateLog);
router.delete("/:id", AdminMiddleware ,DelLog);


export default router