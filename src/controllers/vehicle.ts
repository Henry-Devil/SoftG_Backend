import {Request, Response} from 'express';
import { Vehicle } from '../models/vehicle';

export const getVehicles = async (req: Request, res: Response) => {
    const listVehicles = await Vehicle.findAll();

    res.json(listVehicles)

} 


