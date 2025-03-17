"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
class Server {
    constructor(port) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.get("/", (req, res) => {
            res.send("Bienvenido a la API de productos");
        });
        this.app.use("/api/v1/users", routes_1.userRouter);
        this.app.use("/api/v1/products", routes_1.productRouter);
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
exports.default = Server;
