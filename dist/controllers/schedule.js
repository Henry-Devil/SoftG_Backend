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
exports.deleteSchedule = exports.putSchedule = exports.postSchedule = exports.getSchedule = exports.getSchedules = void 0;
const schedule_1 = require("../models/schedule");
//obtener todos los schedules
const getSchedules = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listSchedule = yield schedule_1.Schedule.findAll();
    res.json(listSchedule);
});
exports.getSchedules = getSchedules;
//Obtener un schedule por id
const getSchedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const schedule = yield schedule_1.Schedule.findOne({ where: { id } });
    if (!schedule) {
        res.status(404).json({ msg: "Schedule no encontrado" });
        return;
    }
    res.json(schedule);
});
exports.getSchedule = getSchedule;
//Crear un nuevo schedule
const postSchedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const newSchedule = yield schedule_1.Schedule.create(body);
        res.json({ msg: "Schedule agregado con éxito", schedule: newSchedule });
    }
    catch (error) {
        res.status(500).json({ msg: "Error al agregar el Schedule" });
    }
});
exports.postSchedule = postSchedule;
//actualizar un schedule existente
const putSchedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const schedule = yield schedule_1.Schedule.findOne({ where: { id } });
        if (!schedule) {
            res.status(404).json({ msg: "Schedule no encontrado" });
            return;
        }
        const updatedSchedule = yield schedule.update(body);
        res.json({ msg: "Schedule actualizado con éxito", schedule: updatedSchedule });
    }
    catch (error) {
        res.status(500).json({ msg: "Error al actualizar el Schedule" });
    }
});
exports.putSchedule = putSchedule;
//eliminar un schedule existente
const deleteSchedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const schedule = yield schedule_1.Schedule.findOne({ where: { id } });
        if (!schedule) {
            res.status(404).json({ msg: "Schedule no encontrado" });
            return;
        }
        yield schedule.destroy();
        res.json({ msg: "Schedule eliminado con éxito" });
    }
    catch (error) {
        res.status(500).json({ msg: "Error al eliminar el Schedule" });
    }
});
exports.deleteSchedule = deleteSchedule;
