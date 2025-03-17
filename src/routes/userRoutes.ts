import { Router } from "express";

import {
  createUser,
  deleteUser,
  forgotPassword,
  getUserById,
  getUsers,
  login,
  updatePassword,
  updateUser,
  verifyUser,
} from "../controllers/userController";
import { authenticateToken } from "../middleware/auth.middleware";

const userRouter = Router();

userRouter.post("/", createUser);
userRouter.get("/", authenticateToken, getUsers);
userRouter.get("/:id", authenticateToken, getUserById);
userRouter.put("/:id", authenticateToken, updateUser);
userRouter.delete("/:id", authenticateToken, deleteUser);
userRouter.post("/verify/:token", verifyUser);
userRouter.post("/login", login);
userRouter.post("/forgot-password", forgotPassword);
userRouter.post("/update-password", updatePassword);

export default userRouter;
