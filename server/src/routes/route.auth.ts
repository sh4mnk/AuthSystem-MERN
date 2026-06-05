import express from "express";
import { signupController, loginController, logoutController } from "../controllers/auth.controller";

const router = express.Router();

router.post("auth/signup", signupController);
router.post("/auth/login", loginController);
router.post("/auth/logout", logoutController);

router.get("/auth/test", (req, res) => {
  res.json({ message: "auth route works" });
});


export default router;



