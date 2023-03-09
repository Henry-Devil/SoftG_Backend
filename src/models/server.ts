import express, { Application } from 'express';
import routesDriver from '../routes/driver';
import routesUser from '../routes/user';
import routesVehicles from '../routes/vehicle';
import routesRoutes from '../routes/route'
import routesSchedules from '../routes/schedule'
import { Driver } from './driver';
import { User } from './user';
import { Vehicle } from './vehicle';
import { Route } from './route';
import { Schedule } from './schedule';
import connection from '../db/connectionbd';
import cors from 'cors';


class Server {
    private app: Application;
    private port: string;

    constructor (){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlwares();
        this.routes();
        this.dbConect()
        this.conectarDB()
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Aplicación corriendo en puerto ' + this.port )
            
        })
    }

    routes(){
        this.app.use('/api/drivers', routesDriver);
        this.app.use('/api/users', routesUser);
        this.app.use('/api/vehicles', routesVehicles);
        this.app.use('/api/routes', routesRoutes);
        this.app.use('/api/schedules', routesSchedules)
    }

    midlwares(){

        //parseo del body
        this.app.use(express.json());
        //cors
        this.app.use(cors());
    }

    conectarDB(){
        connection.connect((err) => {
            if (err) throw err;
            console.log('Conectado a la base de datos');
            
        })
    }

    async dbConect(){
        try {
            await Driver.sync()
            await User.sync()
            await Vehicle.sync()
            await Route.sync()
            await Schedule.sync()
        } catch (error) {
            console.log('Unable to connect to the database.', error);
            
        }
    }

    

}

export default Server