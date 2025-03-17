"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const server_1 = __importDefault(require("./server"));
const config_1 = require("./config");
const Connection_1 = require("./database/Connection");
(async () => {
    const DATABASE_URL = `postgres://${config_1.envs.POSTGRES_USER}:${config_1.envs.POSTGRES_PASSWORD}@${config_1.envs.POSTGRES_HOST}:${config_1.envs.POSTGRES_PORT}/${config_1.envs.POSTGRES_DATABASE}`;
    const connectionOptions = {
        databaseUrl: DATABASE_URL,
        dialect: "postgres",
        logging: true,
        modelsPath: path_1.default.join(__dirname, "models/index.ts"),
    };
    const isConnected = await Connection_1.DatabaseConnectionManager.initialize(connectionOptions);
    if (isConnected) {
        const sequelize = Connection_1.DatabaseConnectionManager.getInstance();
        sequelize.sync({ force: false });
        console.log("Database connection established successfully.");
    }
    else {
        console.error("Failed to connect to the database.");
    }
})();
new server_1.default(config_1.envs.PORT).start();
