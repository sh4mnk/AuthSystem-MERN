import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/route.auth";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "auth-system-mern-eta.vercel.app",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
