import {Request, Response} from 'express';
import { Driver } from '../models/driver';
import connection from '../db/connectionbd';

export const getDrivers = async (req: Request, res: Response) => {
    const listDrivers = await Driver.findAll();

    res.json(listDrivers)

} 
export const getDriver = async (req: Request, res: Response) => {
    const { id } = req.params;
    const driver = await Driver.findByPk(id);
  
    if (!driver) {
      return res.status(404).json({ msg: `No se encontró el conductor con id ${id}` });
    }
  
    res.json(driver);
  }

// Método para eliminar un conductor existente
export const deleteDriver = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const rowsDeleted = await Driver.destroy({
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
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Error al eliminar conductor'
      });
    }
  }
//Metodo para agregar conductor
export const postDriver = async (req: Request, res: Response) => {
    const { body } = req;
    
    try {
      const newDriver = await Driver.create(body);
      res.json({
        message: 'Conductor agregado con éxito',
        driver: newDriver
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Error al agregar conductor'
      });
    }
  }

// Método para actualizar un conductor existente
export const putDriver = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
  
    try {
      const [rowsUpdated, [updatedDriver]] = await Driver.update(body, {
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
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Error al actualizar conductor'
      });
    }
  }