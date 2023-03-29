"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putRoute = exports.postRoute = exports.deleteRoute = exports.getRoute = exports.getRoutes = void 0;
const route_1 = require("../models/route");
// obtener todas las rutas
const getRoutes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listRoute = yield route_1.Route.findAll();
    res.json(listRoute);
});
exports.getRoutes = getRoutes;
// Obtener una ruta por ID
const getRoute = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const route = yield route_1.Route.findByPk(id);
    if (!route) {
        res.status(404).json({ msg: 'La ruta no existe' });
        return;
    }
    res.json(route);
});
exports.getRoute = getRoute;
// Eliminar una ruta existente
const deleteRoute = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const route = yield route_1.Route.findByPk(id);
        if (!route) {
            res.status(404).json({ msg: 'La ruta no existe' });
            return;
        }
        yield route.destroy();
        res.json({ msg: 'Ruta eliminada exitosamente' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Ocurrió un error al eliminar la ruta' });
    }
});
exports.deleteRoute = deleteRoute;
// Crear una nueva ruta
const postRoute = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const route = yield route_1.Route.create(body);
        res.json(route);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Ocurrió un error al crear la ruta' });
    }
});
exports.postRoute = postRoute;
//Actualizar ruta
const putRoute = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const route = yield route_1.Route.findByPk(id);
        if (!route) {
            res.status(404).json({ msg: 'La ruta no existe' });
            return;
        }
        yield route.update(body);
        res.json(route);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Ocurrió un error al actualizar la ruta' });
    }
});
exports.putRoute = putRoute;
