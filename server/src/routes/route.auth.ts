import express from "express";
import { forgotPasswordController,signupController, loginController, logoutController, userProfileController } from "../controllers/auth.controller";
import { protect } from "../middleware/auth.middlware";
import { adminOnly } from "../middleware/admin.middlware";

const router = express.Router();


router.post("/auth/signup", signupController);

router.post("/auth/login", loginController);

router.post("/auth/logout", logoutController);

router.post("/auth/forgot-password",forgotPasswordController);

router.get("/admin/profile",
    protect,
    userProfileController,
    adminOnly
)

router.get("/admin/users",
    protect,
    adminOnly,
    userProfileController
)


export default router;