import { Router } from "express";
import productsController from "../controllers/products.controller.js"
import uploader from "../services/uploader.js";

const router = Router();

router.get('/', productsController.getAllProducts);
router.get('/:pid', productsController.getProductById);
router.post('/', uploader.single('Image'), productsController.createProduct);
router.delete('/', productsController.deleteProduct);

export default router