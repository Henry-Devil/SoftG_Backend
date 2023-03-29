"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ msg: "Acceso denegado" });
    }
    const token = authHeader.slice(7);
    if (!token) {
        return res.status(401).json({ msg: "Acceso denegado" });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || "default_secret_key");
        req.user = decoded;
        next();
    }
    catch (err) {
        return res.status(401).json({ msg: "Token no válido" });
    }
};
exports.default = validateToken;
