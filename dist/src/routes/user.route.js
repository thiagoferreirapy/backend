"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const userMiddleware_1 = __importDefault(require("../middlewares/userMiddleware"));
const userRoute = (0, express_1.Router)();
const userController = new user_controller_1.default();
userRoute.post('/user', userMiddleware_1.default, (req, res) => userController.create(req, res));
exports.default = userRoute;
