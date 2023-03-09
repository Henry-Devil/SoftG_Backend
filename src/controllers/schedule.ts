import {Request, Response} from 'express';
import { Schedule } from '../models/schedule';


//obtener todos los schedules
export const getSchedules = async (req: Request, res: Response) => {
    const listSchedule = await Schedule.findAll();

    res.json(listSchedule)

} 
//Obtener un schedule por id
export const getSchedule = async (req: Request, res: Response) => {
    const { id } = req.params;
    const schedule = await Schedule.findOne({ where: { id } });

    if (!schedule) {
        res.status(404).json({ msg: "Schedule no encontrado" });
        return;
    }

    res.json(schedule);
}
//Crear un nuevo schedule
export const postSchedule = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const newSchedule = await Schedule.create(body);
        res.json({ msg: "Schedule agregado con éxito", schedule: newSchedule });
    } catch (error) {
        res.status(500).json({ msg: "Error al agregar el Schedule" });
    }
}

//actualizar un schedule existente
export const putSchedule = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const schedule = await Schedule.findOne({ where: { id } });

        if (!schedule) {
            res.status(404).json({ msg: "Schedule no encontrado" });
            return;
        }

        const updatedSchedule = await schedule.update(body);
        res.json({ msg: "Schedule actualizado con éxito", schedule: updatedSchedule });
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar el Schedule" });
    }
}

//eliminar un schedule existente
export const deleteSchedule = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const schedule = await Schedule.findOne({ where: { id } });

        if (!schedule) {
            res.status(404).json({ msg: "Schedule no encontrado" });
            return;
        }

        await schedule.destroy();
        res.json({ msg: "Schedule eliminado con éxito" });
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar el Schedule" });
    }
}
