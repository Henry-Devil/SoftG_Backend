"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schedule_1 = require("../controllers/schedule");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
router.get('/', validate_token_1.default, schedule_1.getSchedules);
router.get('/:id', schedule_1.getSchedule);
router.post('/', schedule_1.postSchedule);
router.put('/:id', schedule_1.putSchedule);
router.delete('/:id', schedule_1.deleteSchedule);
exports.default = router;
