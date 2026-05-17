import { Express } from "express";
import router from "../server";
import prisma from "../config/prisma";

 router.post("/signup", async (req, res) => {
  const { name, email , password} = req.body
  
    const User = await prisma.user.create({
    data: { name, email , password},
  });
  console.log("User created:", User);
  // Here you would typically save the user to your database
  // For this example, we'll just return a success response
  res.status(201).json({ message: "User created successfully" });
}

);