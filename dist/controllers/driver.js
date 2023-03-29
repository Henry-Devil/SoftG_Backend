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
exports.putDriver = exports.postDriver = exports.deleteDriver = exports.getDriver = exports.getDrivers = void 0;
const driver_1 = require("../models/driver");
const getDrivers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listDrivers = yield driver_1.Driver.findAll();
    res.json(listDrivers);
});
exports.getDrivers = getDrivers;
const getDriver = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const driver = yield driver_1.Driver.findByPk(id);
    if (!driver) {
        return res.status(404).json({ msg: `No se encontró el conductor con id ${id}` });
    }
    res.json(driver);
});
exports.getDriver = getDriver;
// Método para eliminar un conductor existente
const deleteDriver = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const rowsDeleted = yield driver_1.Driver.destroy({
            where: { id }
        });
        if (rowsDeleted === 0) {
            return res.status(404).json({
                message: 'No se encontró el conductor a eliminar'
            });
        }
        res.json({
            message: 'Conductor eliminado con éxito'
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al eliminar conductor'
        });
    }
});
exports.deleteDriver = deleteDriver;
//Metodo para agregar conductor
const postDriver = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const newDriver = yield driver_1.Driver.create(body);
        res.json({
            message: 'Conductor agregado con éxito',
            driver: newDriver
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al agregar conductor'
        });
    }
});
exports.postDriver = postDriver;
// Método para actualizar un conductor existente
const putDriver = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const [rowsUpdated, [updatedDriver]] = yield driver_1.Driver.update(body, {
            where: { id },
            returning: true
        });
        if (rowsUpdated === 0) {
            return res.status(404).json({
                message: 'No se encontró el conductor a actualizar'
            });
        }
        res.json({
            message: 'Conductor actualizado con éxito',
            driver: updatedDriver
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al actualizar conductor'
        });
    }
});
exports.putDriver = putDriver;
