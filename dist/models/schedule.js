"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Schedule = connection_1.default.define('schedule', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    //route_id
    week_num: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    from: {
        type: sequelize_1.DataTypes.TIME
    },
    to: {
        type: sequelize_1.DataTypes.TIME
    }
});
