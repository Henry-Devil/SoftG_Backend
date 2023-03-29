import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Schedule = sequelize.define('schedule', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true    
    },
    //route_id

    week_num: {
        type:DataTypes.INTEGER,
    },
    from: {
        type: DataTypes.TIME
    },
    to: {
        type: DataTypes.TIME
    }
},)
