import { Response,NextFunction } from "express";
import { AuthRequest } from "./auth.middlware";


// Middleware to restrict access to admin users only

export const adminOnly = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const user = req.existingUser;
  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  if (user.role !== "ADMIN") {
    return res.status(403).json({
      success: false,
      message: "Access denied. Admins only.",
    });
  }

  next();
}