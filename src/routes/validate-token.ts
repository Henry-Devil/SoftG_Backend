import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const headerToken = req.headers['authorization']
    console.log(headerToken);

    if (headerToken != undefined && headerToken.startsWith('Bearer ')){
        //Tiene token
        const bearerToken = headerToken.slice(7);
        console.log(bearerToken);
        
        // jwt.verify()

        next()
    } else {
        res.status(401).json({
            msg: "Acceso denegado"
        })
    }
}

export default validateToken;