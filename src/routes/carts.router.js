import { Router } from "express";
import cartsController from "../controllers/carts.controller.js";

const router = Router();

router.put('/',cartsController.addProduct)


export default router