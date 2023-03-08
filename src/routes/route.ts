import { Router } from "express";
import { getRoutes } from "../controllers/route";

const router = Router();

router.get('/', getRoutes)
export default router;