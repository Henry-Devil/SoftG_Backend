"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route_1 = require("../controllers/route");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
router.get('/', validate_token_1.default, route_1.getRoutes);
router.get('/:id', route_1.getRoute);
router.post('/', route_1.postRoute);
router.put('/:id', route_1.putRoute);
router.delete('/:id', route_1.deleteRoute);
exports.default = router;
