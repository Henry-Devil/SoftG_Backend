"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const driver_1 = require("../controllers/driver");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
router.get('/', validate_token_1.default, driver_1.getDrivers);
router.get('/:id', driver_1.getDriver);
router.delete('/:id', driver_1.deleteDriver);
router.post('/', driver_1.postDriver);
router.put('/:id', driver_1.putDriver);
exports.default = router;
