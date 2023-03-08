import { Router } from "express";
import { getSchedules } from "../controllers/schedule";

const router = Router();

router.get('/', getSchedules)
export default router;