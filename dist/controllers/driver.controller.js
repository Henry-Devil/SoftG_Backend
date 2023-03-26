"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putDriver = exports.postDriver = exports.deleteDriver = exports.getDriver = exports.getDrivers = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getDrivers = (req, res) => {
    connection_1.default.query('SELECT * FROM driver', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
    res.json({
        msg: "GetDrivers"
    });
};
exports.getDrivers = getDrivers;
const getDriver = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "getDriver",
        id: id
    });
};
exports.getDriver = getDriver;
const deleteDriver = (req, res) => {
    const { body } = req.params;
    res.json({
        msg: "deleteDriver",
        body
    });
};
exports.deleteDriver = deleteDriver;
const postDriver = (req, res) => {
    const { body } = req;
    res.json({
        msg: "postDriver",
        body
    });
};
exports.postDriver = postDriver;
const putDriver = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "putDriver",
        body,
        id
    });
};
exports.putDriver = putDriver;
