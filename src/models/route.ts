import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { Driver } from "./driver";
import { Vehicle } from "./vehicle";
import { Schedule } from "./schedule";

export const Route = sequelize.define('route', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true    
    },
    description: {
        type:DataTypes.STRING,
    }
    //driver_id

    //vehicles_id
    
});


// asociación con la tabla drivers
Route.belongsTo(Driver, { foreignKey: 'drivers_id' });
Driver.hasMany(Route, { foreignKey: 'drivers_id' });

// asociación con la tabla vehicles
Route.belongsTo(Vehicle, { foreignKey: 'vehicles_id' });
Vehicle.hasMany(Route, { foreignKey: 'vehicles_id' });

// asociación con la tabla schedules
Route.hasMany(Schedule, { foreignKey: 'route_id' });
Schedule.belongsTo(Route, { foreignKey: 'route_id' });