"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = exports.productRouter = void 0;
var productRouter_1 = require("./productRouter");
Object.defineProperty(exports, "productRouter", { enumerable: true, get: function () { return __importDefault(productRouter_1).default; } });
var userRoutes_1 = require("./userRoutes");
Object.defineProperty(exports, "userRouter", { enumerable: true, get: function () { return __importDefault(userRoutes_1).default; } });
