import express from "express";
import { forgotPasswordController,signupController, loginController, logoutController } from "../controllers/auth.controller";

const router = express.Router();

// Define routes for authentication

// Signup route
router.post("/auth/signup", signupController);

// Login route
router.post("/auth/login", loginController);

// Logout route
router.post("/auth/logout", logoutController);

// Forgot password route
router.post("/auth/forgot-password",forgotPasswordController);



export default router;


