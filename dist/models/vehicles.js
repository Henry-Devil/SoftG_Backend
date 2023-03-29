"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Vehicle = connection_1.default.define('vehicle', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    },
    year: {
        type: sequelize_1.DataTypes.INTEGER
    },
    make: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    capacity: {
        type: sequelize_1.DataTypes.INTEGER
    },
});
