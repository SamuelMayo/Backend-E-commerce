import { Router } from "express";
import cartsController from "../controllers/carts.controller.js";

const router = Router();

router.put('/',cartsController.addProduct)
router.put('/deleteProduct',cartsController.deleteProduct)
router.post('/checkout',cartsController.checkout)

export default router