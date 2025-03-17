import path from "path";

import Server from "./server";

import { envs } from "./config";

import {
  ConnectionOptions,
  DatabaseConnectionManager,
} from "./database/Connection";

(async () => {
  const DATABASE_URL = `postgres://${envs.POSTGRES_USER}:${envs.POSTGRES_PASSWORD}@${envs.POSTGRES_HOST}:${envs.POSTGRES_PORT}/${envs.POSTGRES_DATABASE}`;

  const connectionOptions: ConnectionOptions = {
    databaseUrl: DATABASE_URL,
    dialect: "postgres",
    logging: true,
    modelsPath: path.join(__dirname, "models/index.js"), // cambiar el ts a js en productivo
  };

  const isConnected = await DatabaseConnectionManager.initialize(
    connectionOptions
  );

  if (isConnected) {
    const sequelize = DatabaseConnectionManager.getInstance();
    sequelize.sync({ force: false });
    console.log("Database connection established successfully.");
  } else {
    console.error("Failed to connect to the database.");
  }
})();

new Server(envs.PORT).start();
