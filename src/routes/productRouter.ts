import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
  uploadProductImage,
} from "../controllers/productController";
import { authenticateToken } from "../middleware/auth.middleware";

const productRouter = Router();

productRouter.post("/", authenticateToken, uploadProductImage, createProduct);
productRouter.get("/", authenticateToken, getProducts);
productRouter.put("/:id", authenticateToken, uploadProductImage, updateProduct);
productRouter.delete("/:id", authenticateToken, deleteProduct);

export default productRouter;
