import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { User } from "../models/user";
import jwt from 'jsonwebtoken'

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

export const loginUser = async (req: Request, res: Response) =>{

    const {username, password} = req.body;

    //Validamos si el usuario existe en la base de datos
    const user = await User.findOne({where: {username: username}});

    if(!user){
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${username} en la base de datos`
        })
    }

    //Validamos password
   const passwordValid = await bcrypt.compare(password, user.password)
   
   if(!passwordValid){
    return res.status(400).json({
        msg: `Password incorrecta`
    })
   }


   if (!process.env.SECRET_KEY) {
    console.error("La variable de entorno SECRET_KEY no está definida");
    process.exit(1);
  }

    //Generamos token 
    const token = jwt.sign({
        username: username
    }, process.env.SECRET_KEY,{
        expiresIn: '1d'
    })

    // Agregamos el token al encabezado Authorization
    res.set('Authorization', `Bearer ${token}`)

    res.json({token})
    
}