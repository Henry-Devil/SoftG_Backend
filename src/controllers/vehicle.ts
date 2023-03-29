import {Request, Response} from 'express';
import { Vehicle } from '../models/vehicle';

export const getVehicles = async (req: Request, res: Response) => {
    const listVehicles = await Vehicle.findAll();

    res.json(listVehicles)

} 

export const getVehicle = async (req: Request, res: Response) => {
    const { id } = req.params;
    const vehicle = await Vehicle.findOne({ where: { id } });

    if (!vehicle) {
        res.status(404).json({ msg: "Vehicle no encontrado" });
        return;
    }

    res.json(vehicle);
}

export const postVehicle = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const newVehicle = await Vehicle.create(body);
        res.json({ msg: "Vehicle agregado con éxito", vehicle: newVehicle });
    } catch (error) {
        res.status(500).json({ msg: "Error al agregar el Vehicle" });
    }
}

export const deleteVehicle = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const vehicle = await Vehicle.findOne({ where: { id } });

        if (!vehicle) {
            res.status(404).json({ msg: "Vehicle no encontrado" });
            return;
        }

        await vehicle.destroy();
        res.json({ msg: "Vehicle eliminado con éxito" });
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar el Vehicle" });
    }
}

export const putVehicle = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const vehicle = await Vehicle.findOne({ where: { id } });

        if (!vehicle) {
            res.status(404).json({ msg: "Vehicle no encontrado" });
            return;
        }

        await vehicle.update(body);
        res.json({ msg: "Vehicle actualizado con éxito", vehicle });
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar el Vehicle" });
    }
}