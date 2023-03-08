import {Request, Response} from 'express';
import { Driver } from '../models/driver';

export const getDrivers = async (req: Request, res: Response) => {
    const listDrivers = await Driver.findAll();

    res.json(listDrivers)

} 


