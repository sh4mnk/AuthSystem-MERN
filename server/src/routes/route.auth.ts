import express from "express";
import { forgotPasswordController,signupController, loginController, logoutController } from "../controllers/auth.controller";

const router = express.Router();


router.post("/auth/signup", signupController);

router.post("/auth/login", loginController);

router.post("/auth/logout", logoutController);

router.post("/auth/forgot-password",forgotPasswordController);

router.post("/auth/admin/users");


export default router;