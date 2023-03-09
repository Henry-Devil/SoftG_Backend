import { Router } from "express";
import { deleteRoute, getRoute, getRoutes, postRoute, putRoute } from "../controllers/route";
import validateToken from "./validate-token";

const router = Router();

router.get('/',validateToken, getRoutes)
router.get('/:id', getRoute);
router.post('/', postRoute);
router.put('/:id', putRoute);
router.delete('/:id', deleteRoute);
export default router;