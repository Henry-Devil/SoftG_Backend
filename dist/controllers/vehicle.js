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
exports.putVehicle = exports.deleteVehicle = exports.postVehicle = exports.getVehicle = exports.getVehicles = void 0;
const vehicle_1 = require("../models/vehicle");
const getVehicles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listVehicles = yield vehicle_1.Vehicle.findAll();
    res.json(listVehicles);
});
exports.getVehicles = getVehicles;
const getVehicle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const vehicle = yield vehicle_1.Vehicle.findOne({ where: { id } });
    if (!vehicle) {
        res.status(404).json({ msg: "Vehicle no encontrado" });
        return;
    }
    res.json(vehicle);
});
exports.getVehicle = getVehicle;
const postVehicle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const newVehicle = yield vehicle_1.Vehicle.create(body);
        res.json({ msg: "Vehicle agregado con éxito", vehicle: newVehicle });
    }
    catch (error) {
        res.status(500).json({ msg: "Error al agregar el Vehicle" });
    }
});
exports.postVehicle = postVehicle;
const deleteVehicle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const vehicle = yield vehicle_1.Vehicle.findOne({ where: { id } });
        if (!vehicle) {
            res.status(404).json({ msg: "Vehicle no encontrado" });
            return;
        }
        yield vehicle.destroy();
        res.json({ msg: "Vehicle eliminado con éxito" });
    }
    catch (error) {
        res.status(500).json({ msg: "Error al eliminar el Vehicle" });
    }
});
exports.deleteVehicle = deleteVehicle;
const putVehicle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const vehicle = yield vehicle_1.Vehicle.findOne({ where: { id } });
        if (!vehicle) {
            res.status(404).json({ msg: "Vehicle no encontrado" });
            return;
        }
        yield vehicle.update(body);
        res.json({ msg: "Vehicle actualizado con éxito", vehicle });
    }
    catch (error) {
        res.status(500).json({ msg: "Error al actualizar el Vehicle" });
    }
});
exports.putVehicle = putVehicle;
