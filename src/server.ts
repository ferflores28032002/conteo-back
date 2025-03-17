import cors from "cors";
import express, { Application, Request, Response } from "express";

import { productRouter, userRouter } from "./routes";

class Server {
  private app: Application;
  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private routes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.send("Bienvenido a la API de productos");
    });

    this.app.use("/api/v1/users", userRouter);
    this.app.use("/api/v1/products", productRouter);
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default Server;
