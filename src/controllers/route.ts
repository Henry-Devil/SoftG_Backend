import {Request, Response} from 'express';
import { Route } from '../models/route';

export const getRoutes = async (req: Request, res: Response) => {
    const listRoute = await Route.findAll();

    res.json(listRoute)

} 


