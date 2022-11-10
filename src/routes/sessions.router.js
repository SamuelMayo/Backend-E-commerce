import { Router } from "express";
import sessionControllers from "../controllers/session.controllers.js";

const router = Router(); 

router.post('/register', sessionControllers.register);
router.post('/login', sessionControllers.login);

export default router