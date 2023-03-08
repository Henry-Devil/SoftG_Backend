import { Router } from "express";
import { getDrivers } from "../controllers/driver";

const router = Router();

router.get('/', getDrivers)
export default router;