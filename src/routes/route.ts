import { Router } from "express";
import { getRoutes } from "../controllers/route";
import validateToken from "./validate-token";

const router = Router();

router.get('/',validateToken, getRoutes)
export default router;