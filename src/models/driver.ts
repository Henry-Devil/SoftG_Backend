import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Driver = sequelize.define('drivers', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true    
    },
    last_name: {
        type:DataTypes.STRING
    },
    first_name: {
        type: DataTypes.STRING
    },
    dob: {
        type: DataTypes.DATE,
    },
    address: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.INTEGER
    },
    city: {
        type: DataTypes.STRING
    }
});
