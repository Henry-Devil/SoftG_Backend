"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehicle_1 = require("../controllers/vehicle");
const router = (0, express_1.Router)();
router.get('/', vehicle_1.getVehicles);
exports.default = router;
