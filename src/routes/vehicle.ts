import { Router } from "express";
import { getVehicles } from "../controllers/vehicle";
import validateToken from "./validate-token";

const router = Router();

router.get('/',validateToken, getVehicles)
export default router;