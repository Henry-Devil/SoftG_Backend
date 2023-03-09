import { Router } from "express";
import { deleteVehicle, getVehicle, getVehicles, postVehicle, putVehicle } from "../controllers/vehicle";
import validateToken from "./validate-token";

const router = Router();

router.get('/',validateToken, getVehicles)
router.get('/:id', getVehicle);
router.delete('/:id', deleteVehicle);
router.post('/', postVehicle);
router.put('/:id', putVehicle);

export default router;