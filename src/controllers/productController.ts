import { validateOrReject } from "class-validator";

import { Request, Response } from "express";
import multer from "multer";
import { Op } from "sequelize";

import { CreateProductDto } from "../dto/product/CreateProductDto";
import { UpdateProductDto } from "../dto/product/UpdateProductDto";

import CustomError from "../error/customError";
import Product from "../models/product";
import User from "../models/user";

import { PRODUCT_MESSAGES } from "../constants/messages";
import { uploadImage } from "../services/ImageService";

const upload = multer({ storage: multer.memoryStorage() });

export const createProduct = async (req: Request, res: Response) => {
  try {
    req.body.code = parseInt(req.body.code, 10);
    req.body.quantity = parseInt(req.body.quantity, 10);

    const file = req.file;

    if (!file) {
      res.status(400).json({ message: PRODUCT_MESSAGES.IMAGE_REQUIRED });
      return;
    }

    const dto = new CreateProductDto();
    Object.assign(dto, req.body);
    await validateOrReject(dto);

    const { code, name, description, quantity } = dto;

    const duplicateProduct = await Product.findOne({ where: { code } });

    if (duplicateProduct) {
      res.status(400).json({ message: PRODUCT_MESSAGES.PRODUCT_EXISTS });
      return;
    }

    const userId = (req as any).userId;

    if (!userId) {
      res.status(401).json({ message: PRODUCT_MESSAGES.UNAUTHORIZED });
      return;
    }

    let imageUrl: string | null = null;
    if (file) {
      imageUrl = await uploadImage(file);
    }

    const product = await Product.create({
      code,
      name,
      description,
      quantity,
      image: imageUrl,
      createdBy: userId,
    });

    res
      .status(201)
      .json({ message: PRODUCT_MESSAGES.PRODUCT_CREATED, product });
  } catch (error) {
    console.log(error);
    throw CustomError.InternalServerError();
  }
};

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const userId = (_req as any).userId;

    if (!userId) {
      res.status(401).json({ message: PRODUCT_MESSAGES.UNAUTHORIZED });
      return;
    }

    const products = await Product.findAll({
      // where: { createdBy: userId }, // Uncomment this line if you want to filter products by user
      include: [User],
      order: [
        ["updatedAt", "DESC"],
        ["createdAt", "DESC"],
      ],
    });
    res.status(200).json(products);
  } catch (error) {
    throw CustomError.InternalServerError();
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    if (req.body.code) {
      req.body.code = parseInt(req.body.code, 10);
    }
    if (req.body?.quantity) {
      req.body.quantity = parseInt(req.body.quantity, 10);
    }

    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      res.status(404).json({ message: PRODUCT_MESSAGES.PRODUCT_NOT_FOUND });
      return;
    }

    let imageUrl = product.image; 

    if (req.file) {
      imageUrl = await uploadImage(req.file); 
    }

    const dto = new UpdateProductDto();
    Object.assign(dto, req.body, { image: imageUrl });

    await validateOrReject(dto);

    const duplicateProduct = await Product.findOne({
      where: {
        code: dto.code,
        id: { [Op.ne]: id },
      },
    });

    if (duplicateProduct) {
      res.status(400).json({ message: PRODUCT_MESSAGES.PRODUCT_EXISTS });
      return;
    }

    Object.assign(product, req.body, { image: imageUrl });

    await product.save();

    res.status(200).json({ message: PRODUCT_MESSAGES.PRODUCT_UPDATED, product });
  } catch (error) {
    throw CustomError.InternalServerError();
  }
};


export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      res.status(404).json({ message: PRODUCT_MESSAGES.PRODUCT_NOT_FOUND });
      return;
    }

    await product.destroy();
    res.status(200).json({ message: PRODUCT_MESSAGES.PRODUCT_DELETED });
  } catch (error) {
    throw CustomError.InternalServerError();
  }
};

export const uploadProductImage = upload.single("image");
