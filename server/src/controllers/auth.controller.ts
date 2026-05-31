

import { Request , Response  } from "express";

import prisma from "../config/prisma";


export const signupController = async (req: Request, res: Response) => {
    try {
    const {name , email , password} = req.body;

    //check if user already exists
    const existingUser = await prisma.user.findUnique({
        where : {email}
    });

    if(existingUser){
        return res.status(500).json({message : "User already exists"});
    }


    //create new user
    const Usercredential = await prisma.user.create({
        data: { name, email , password},
    });
    console.log("User created:",Usercredential);
    // Here you would typically save the user to your database
    // For this example, we'll just return a success response
    res.status(201).json({ message: "User created successfully" }); 
    } catch (error) {
        console.error("Error signing up:", error);
        res.status(500).json({ message: "Internal server error" });
    }


}


export const loginController = async (req: Request, res: Response) => {
    try {
        const {email , password} = req.body;

        //check if user exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        if (existingUser.password !== password) {
        return res.status(401).json({message : "Invalid credentials"});
    }

    // Here you would typically generate a token and return it to the client
    // For this example, we'll just return a success response
    res.status(200).json({ message: "Login successful" });
    }catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Internal server error" });
    }

}

