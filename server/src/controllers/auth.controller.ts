import { Request, Response } from "express";
import bcrypt from "bcrypt";

import prisma from "../config/prisma";
import { generateAccessToken } from "../utils/jwt";



// Signup Controller
export const signupController = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, email, password } = req.body;

    // Check existing user
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // Generate JWT
    const token = generateAccessToken(
      user.id,
      user.email
    );

    return res.status(201).json({
      message: "User created successfully",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Signup Error:", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};


// Login Controller

export const loginController = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, password } = req.body;

    // Find user
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Compare password
    const isPasswordValid =
      await bcrypt.compare(
        password,
        existingUser.password
      );

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // Generate JWT
    const token = generateAccessToken(
      existingUser.id,
      existingUser.email
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};




// Logout Controller
export const logoutController = async (
  _req: Request,
  res: Response
) => {
  return res.status(200).json({
    message: "Logged out successfully",
  });
};

export const forgotPasswordController = async (
  req: Request,
  res: Response
) => {
  try {
    const { email } = req.body;

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Here you would typically generate a password reset token and send an email
    // For simplicity, we'll just return a success message

    return res.status(200).json({
      message: "Password reset link sent to your email (simulated)",
    });
  } catch (error) {
    console.error("Forgot Password Error:", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
