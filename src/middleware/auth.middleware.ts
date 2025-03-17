import { NextFunction, Request, Response } from "express";

import { JwtAdapter } from "../config/jwt";

import User from "../models/user";

export const authenticateToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({ error: "Authentication token not provided" });
    return;
  }

  try {
    const decodedToken = await JwtAdapter.validateToken<{ id: string }>(
      token
    );

    if (!decodedToken) {
      res.status(401).json({ error: "Invalid or expired token" });
      return;
    }

    const user = await User.findOne({
      where: { id: decodedToken.id },
      attributes: ["id"],
    });

    if (!user) {
      res.status(401).json({ error: "User not found" });
      return;
    }

    (req as any).userId = user.id;
    next();
  } catch (error) {
    console.error("Authentication token verification failed:", error);
    res.status(401).json({ error: "Unauthorized" });
  }
};
