import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "Acceso denegado" });
  }

  const token = authHeader.slice(7);
  if (!token) {
    return res.status(401).json({ msg: "Acceso denegado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY || "default_secret_key");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Token no válido" });
  }
};

export default validateToken;