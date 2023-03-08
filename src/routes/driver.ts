import { Router } from "express";
import { getDrivers } from "../controllers/driver";
import validateToken from "./validate-token";

const router = Router();

router.get('/', validateToken, getDrivers)
export default router;