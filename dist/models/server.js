"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const driver_1 = __importDefault(require("../routes/driver"));
const user_1 = __importDefault(require("../routes/user"));
const vehicle_1 = __importDefault(require("../routes/vehicle"));
const route_1 = __importDefault(require("../routes/route"));
const schedule_1 = __importDefault(require("../routes/schedule"));
const driver_2 = require("./driver");
const user_2 = require("./user");
const vehicle_2 = require("./vehicle");
const route_2 = require("./route");
const schedule_2 = require("./schedule");
const connectionbd_1 = __importDefault(require("../db/connectionbd"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlwares();
        this.routes();
        this.dbConect();
        this.conectarDB();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicación corriendo en puerto ' + this.port);
        });
    }
    routes() {
        this.app.use('/api/drivers', driver_1.default);
        this.app.use('/api/users', user_1.default);
        this.app.use('/api/vehicles', vehicle_1.default);
        this.app.use('/api/routes', route_1.default);
        this.app.use('/api/schedules', schedule_1.default);
    }
    midlwares() {
        //parseo del body
        this.app.use(express_1.default.json());
        //cors
        this.app.use((0, cors_1.default)());
    }
    conectarDB() {
        connectionbd_1.default.connect((err) => {
            if (err)
                throw err;
            console.log('Conectado a la base de datos');
        });
    }
    dbConect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield driver_2.Driver.sync();
                yield user_2.User.sync();
                yield vehicle_2.Vehicle.sync();
                yield route_2.Route.sync();
                yield schedule_2.Schedule.sync();
            }
            catch (error) {
                console.log('Unable to connect to the database.', error);
            }
        });
    }
}
exports.default = Server;
