import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

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
    
},)
