import { Request, Response, NextFunction } from "express";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    console.log('validate token');
    next()
}

export default validateToken;