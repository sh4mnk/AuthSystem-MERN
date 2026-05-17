import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import prisma from "./config/prisma";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const router= express.Router();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

app.use("/api", router);


export default router;