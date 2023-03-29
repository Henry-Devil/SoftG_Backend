"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehicle_1 = require("../controllers/vehicle");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
router.get('/', validate_token_1.default, vehicle_1.getVehicles);
router.get('/:id', vehicle_1.getVehicle);
router.delete('/:id', vehicle_1.deleteVehicle);
router.post('/', vehicle_1.postVehicle);
router.put('/:id', vehicle_1.putVehicle);
exports.default = router;
