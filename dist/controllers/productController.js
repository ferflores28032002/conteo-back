"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadProductImage = exports.deleteProduct = exports.updateProduct = exports.getProducts = exports.createProduct = void 0;
const class_validator_1 = require("class-validator");
const multer_1 = __importDefault(require("multer"));
const sequelize_1 = require("sequelize");
const CreateProductDto_1 = require("../dto/product/CreateProductDto");
const UpdateProductDto_1 = require("../dto/product/UpdateProductDto");
const customError_1 = __importDefault(require("../error/customError"));
const product_1 = __importDefault(require("../models/product"));
const user_1 = __importDefault(require("../models/user"));
const messages_1 = require("../constants/messages");
const ImageService_1 = require("../services/ImageService");
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
const createProduct = async (req, res) => {
    try {
        req.body.code = parseInt(req.body.code, 10);
        req.body.quantity = parseInt(req.body.quantity, 10);
        const file = req.file;
        if (!file) {
            res.status(400).json({ message: messages_1.PRODUCT_MESSAGES.IMAGE_REQUIRED });
            return;
        }
        const dto = new CreateProductDto_1.CreateProductDto();
        Object.assign(dto, req.body);
        await (0, class_validator_1.validateOrReject)(dto);
        const { code, name, description, quantity } = dto;
        const duplicateProduct = await product_1.default.findOne({ where: { code } });
        if (duplicateProduct) {
            res.status(400).json({ message: messages_1.PRODUCT_MESSAGES.PRODUCT_EXISTS });
            return;
        }
        const userId = req.userId;
        if (!userId) {
            res.status(401).json({ message: messages_1.PRODUCT_MESSAGES.UNAUTHORIZED });
            return;
        }
        let imageUrl = null;
        if (file) {
            imageUrl = await (0, ImageService_1.uploadImage)(file);
        }
        const product = await product_1.default.create({
            code,
            name,
            description,
            quantity,
            image: imageUrl,
            createdBy: userId,
        });
        res
            .status(201)
            .json({ message: messages_1.PRODUCT_MESSAGES.PRODUCT_CREATED, product });
    }
    catch (error) {
        console.log(error);
        throw customError_1.default.InternalServerError();
    }
};
exports.createProduct = createProduct;
const getProducts = async (_req, res) => {
    try {
        const userId = _req.userId;
        if (!userId) {
            res.status(401).json({ message: messages_1.PRODUCT_MESSAGES.UNAUTHORIZED });
            return;
        }
        const products = await product_1.default.findAll({
            where: { createdBy: userId },
            include: [user_1.default],
            order: [
                ["updatedAt", "DESC"],
                ["createdAt", "DESC"],
            ],
        });
        res.status(200).json(products);
    }
    catch (error) {
        throw customError_1.default.InternalServerError();
    }
};
exports.getProducts = getProducts;
const updateProduct = async (req, res) => {
    var _a;
    try {
        if (req.body.code) {
            req.body.code = parseInt(req.body.code, 10);
        }
        if ((_a = req.body) === null || _a === void 0 ? void 0 : _a.quantity) {
            req.body.quantity = parseInt(req.body.quantity, 10);
        }
        const { id } = req.params;
        const dto = new UpdateProductDto_1.UpdateProductDto();
        const product = await product_1.default.findByPk(id);
        if (!product) {
            res.status(404).json({ message: messages_1.PRODUCT_MESSAGES.PRODUCT_NOT_FOUND });
            return;
        }
        let imageUrl = product.image;
        if (req.file) {
            imageUrl = await (0, ImageService_1.uploadImage)(req.file);
        }
        Object.assign(dto, req.body, { image: imageUrl });
        await (0, class_validator_1.validateOrReject)(dto);
        const duplicateProduct = await product_1.default.findOne({
            where: {
                code: dto.code,
                id: { [sequelize_1.Op.ne]: id },
            },
        });
        if (duplicateProduct) {
            res.status(400).json({ message: messages_1.PRODUCT_MESSAGES.PRODUCT_EXISTS });
            return;
        }
        Object.assign(product, req.body);
        await product.save();
        res
            .status(200)
            .json({ message: messages_1.PRODUCT_MESSAGES.PRODUCT_UPDATED, product });
    }
    catch (error) {
        throw customError_1.default.InternalServerError();
    }
};
exports.updateProduct = updateProduct;
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await product_1.default.findByPk(id);
        if (!product) {
            res.status(404).json({ message: messages_1.PRODUCT_MESSAGES.PRODUCT_NOT_FOUND });
            return;
        }
        await product.destroy();
        res.status(200).json({ message: messages_1.PRODUCT_MESSAGES.PRODUCT_DELETED });
    }
    catch (error) {
        throw customError_1.default.InternalServerError();
    }
};
exports.deleteProduct = deleteProduct;
exports.uploadProductImage = upload.single("image");
