import { Router } from "express";
import { AdminMiddleware } from "../middleware/admin.middleware";
import { CreateProject, DelProject, GetAllProjects, GetProject, UpdateProject } from "../controllers/project.controller";

const router = Router();

router.post("/", AdminMiddleware, CreateProject);
router.get("/", AdminMiddleware, GetAllProjects);
router.get("/:id", GetProject);
router.delete("/:id", AdminMiddleware, DelProject);
router.put("/:id", AdminMiddleware, UpdateProject);




export default router