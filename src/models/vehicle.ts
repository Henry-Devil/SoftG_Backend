import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Vehicle = sequelize.define('vehicle', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true    
    },
    description: {
        type:DataTypes.STRING
    },
    year: {
        type: DataTypes.INTEGER
    },
    make: {
        type: DataTypes.INTEGER,
    },
    capacity: {
        type: DataTypes.INTEGER
    },
});
