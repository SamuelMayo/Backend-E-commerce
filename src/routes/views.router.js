import { Router } from "express";
import viewsController from "../controllers/views.controller.js";
import { executePolicies, privateValidation, publicValidation } from "../middlewares/auth.js"

const router= Router();



router.get('/', privateValidation, viewsController.home);
router.get('/register', publicValidation,viewsController.register);
router.get('/login',publicValidation,viewsController.login)
router.get('/newProduct',privateValidation, executePolicies(['ADMIN']), viewsController.newProduct)
router.get('/cart',privateValidation, executePolicies(['USER']),viewsController.cart)
router.get('/profile',privateValidation,viewsController.profile)
router.get('/usersPanel',privateValidation, executePolicies(['ADMIN']), viewsController.usersPanel)

export default router;