import { Router } from "express";
import { getSchedules } from "../controllers/schedule";
import validateToken from "./validate-token";

const router = Router();

router.get('/',validateToken, getSchedules)
export default router;