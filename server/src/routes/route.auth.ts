import express from "express";
import { signupController, loginController, logoutController } from "../controllers/auth.controller";

const router = express.Router();

router.post("/auth/signup", signupController);
router.post("/auth/login", loginController);
router.post("/auth/logout", logoutController);



export default router;

