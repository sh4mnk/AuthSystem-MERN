import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookie from "cookie-parser";
import authRouter from "./routes/route.auth";
dotenv.config();

const app = express();

app.use((req, res, next) => {
  console.log("Origin:", req.headers.origin);
  next();
});


app.use(
  cors({
    origin: process.env.CLIENT_URL || [
      "http://localhost:3000",
      "https://auth-system-mern-eta.vercel.app",
    ],
    credentials: true,
  })
);

app.use(cookie());

app.get("/", (req, res) => {
  res.send("Backend Working");
});


app.use(express.json());

app.use("/api", authRouter);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});


export { app };