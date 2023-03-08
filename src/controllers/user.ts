import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { User } from "../models/user";

export const newUser = async (req: Request, res: Response) =>{

    const {username, password} = req.body;

    //Validamos si el usuario ya existe en la base de datos
    const user = await User.findOne({where: {username: username}})
    
    if (user){
        res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${username}`
        })
    }


    const hashedPassword = await bcrypt.hash(password, 10)    
    
    try {
        //Guardamos usuario en la bd
        await User.create({
            username: username,
            password: hashedPassword
        })
            
        res.json({
            msg:`Usuario ${username} creado exitosamente!` 
        })
    } catch (error) {
        res.status(400).json({
            msg: "Ocurrió un error", error
        })
    }
    
}

export const loginUser = (req: Request, res: Response) =>{

    const {body} = req;

    res.json({
        msg: "login User",
        body
    })
    
}