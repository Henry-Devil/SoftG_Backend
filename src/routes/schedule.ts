import { Router } from "express";
import { deleteSchedule, getSchedule, getSchedules, postSchedule, putSchedule } from "../controllers/schedule";
import validateToken from "./validate-token";

const router = Router();

router.get('/',validateToken, getSchedules);
router.get('/:id', getSchedule);
router.post('/', postSchedule);
router.put('/:id', putSchedule);
router.delete('/:id', deleteSchedule);
export default router;