
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";


export interface AuthRequest extends Request {
  existingUser?: any;
}


// This middleware checks if the user is authenticated and has admin privileges

export const protect = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token =
    req.cookies?.token || req.cookies?.accessToken ||
    (req.headers.authorization ? String(req.headers.authorization).split(" ")[1] : undefined);

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    );

    req.existingUser= decoded;

    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};
