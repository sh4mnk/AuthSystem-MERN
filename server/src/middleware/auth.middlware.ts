
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";




export const protect = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.accessToken;

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

    req.User = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};


export const adminOnly = (
    req: Express.Request,
    res: Express.Response,
    next: NextFunction

 )=> {
    if (req.User.role !== "admin") {
        return res.status(403).json({
            success: false,
            message: "Forbidden: Admins only",
        });
    }
    next();

 }