"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jwt_1 = require("../config/jwt");
const user_1 = __importDefault(require("../models/user"));
const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        res.status(401).json({ error: "Authentication token not provided" });
        return;
    }
    try {
        const decodedToken = await jwt_1.JwtAdapter.validateToken(token);
        if (!decodedToken) {
            res.status(401).json({ error: "Invalid or expired token" });
            return;
        }
        const user = await user_1.default.findOne({
            where: { id: decodedToken.id },
            attributes: ["id"],
        });
        if (!user) {
            res.status(401).json({ error: "User not found" });
            return;
        }
        req.userId = user.id;
        next();
    }
    catch (error) {
        console.error("Authentication token verification failed:", error);
        res.status(401).json({ error: "Unauthorized" });
    }
};
exports.authenticateToken = authenticateToken;
