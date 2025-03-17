import { Sequelize } from "sequelize-typescript";

type Dialect = "mysql" | "postgres" | "sqlite" | "mariadb" | "mssql";

export interface ConnectionOptions {
  databaseUrl: string;
  dialect: Dialect;
  logging?: boolean;
  modelsPath?: string;
}

export class DatabaseConnectionManager {
  private static sequelizeInstance: Sequelize;

  static async initialize(options: ConnectionOptions): Promise<boolean> {
    const { databaseUrl, dialect, logging = false, modelsPath } = options;

    this.sequelizeInstance = new Sequelize(databaseUrl, {
      dialect,
      logging,
    });

    if (modelsPath) {
      const models = (await import(modelsPath)).default;
      this.sequelizeInstance.addModels(models);
    }

    try {
      await this.sequelizeInstance.authenticate();
      return true;
    } catch (error) {
      return false;
    }
  }

  static getInstance(): Sequelize {
    if (!this.sequelizeInstance) {
      throw new Error(
        "Sequelize instance has not been initialized. Please call initialize first."
      );
    }
    return this.sequelizeInstance;
  }
}
