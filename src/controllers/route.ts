import {Request, Response} from 'express';
import { Route } from '../models/route';
// obtener todas las rutas
export const getRoutes = async (req: Request, res: Response) => {
    const listRoute = await Route.findAll();

    res.json(listRoute)

} 

// Obtener una ruta por ID
export const getRoute = async (req: Request, res: Response) => {
    const { id } = req.params;
    const route = await Route.findByPk(id);
    if (!route) {
      res.status(404).json({ msg: 'La ruta no existe' });
      return;
    }
    res.json(route);
  };

// Eliminar una ruta existente
export const deleteRoute = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const route = await Route.findByPk(id);
      if (!route) {
        res.status(404).json({ msg: 'La ruta no existe' });
        return;
      }
      await route.destroy();
      res.json({ msg: 'Ruta eliminada exitosamente' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Ocurrió un error al eliminar la ruta' });
    }
  };

// Crear una nueva ruta
export const postRoute = async (req: Request, res: Response) => {
    const { body } = req;
    try {
      const route = await Route.create(body);
      res.json(route);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Ocurrió un error al crear la ruta' });
    }
  };
//Actualizar ruta
  export const putRoute = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
  
    try {
      const route = await Route.findByPk(id);
      if (!route) {
        res.status(404).json({ msg: 'La ruta no existe' });
        return;
      }
      await route.update(body);
      res.json(route);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Ocurrió un error al actualizar la ruta' });
    }
  };