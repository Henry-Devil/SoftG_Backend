"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Driver = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Driver = connection_1.default.define('drivers', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING
    },
    first_name: {
        type: sequelize_1.DataTypes.STRING
    },
    dob: {
        type: sequelize_1.DataTypes.DATE,
    },
    address: {
        type: sequelize_1.DataTypes.STRING
    },
    phone: {
        type: sequelize_1.DataTypes.INTEGER
    },
    city: {
        type: sequelize_1.DataTypes.STRING
    }
});
