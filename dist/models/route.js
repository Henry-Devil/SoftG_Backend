"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const driver_1 = require("./driver");
const vehicle_1 = require("./vehicle");
const schedule_1 = require("./schedule");
exports.Route = connection_1.default.define('route', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
    }
    //driver_id
    //vehicles_id
});
// asociación con la tabla drivers
exports.Route.belongsTo(driver_1.Driver, { foreignKey: 'drivers_id' });
driver_1.Driver.hasMany(exports.Route, { foreignKey: 'drivers_id' });
// asociación con la tabla vehicles
exports.Route.belongsTo(vehicle_1.Vehicle, { foreignKey: 'vehicles_id' });
vehicle_1.Vehicle.hasMany(exports.Route, { foreignKey: 'vehicles_id' });
// asociación con la tabla schedules
exports.Route.hasMany(schedule_1.Schedule, { foreignKey: 'route_id' });
schedule_1.Schedule.belongsTo(exports.Route, { foreignKey: 'route_id' });
