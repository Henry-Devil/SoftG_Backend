import {Request, Response} from 'express';
import { Schedule } from '../models/schedule';

export const getSchedules = async (req: Request, res: Response) => {
    const listSchedule = await Schedule.findAll();

    res.json(listSchedule)

} 


