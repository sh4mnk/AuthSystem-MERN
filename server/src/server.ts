import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import authRouter from "../dist/routes/route.auth";

const app = express();

app.use((req, res, next) => {
  console.log("Origin:", req.headers.origin);
  next();
});

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://auth-system-mern-eta.vercel.app",
    ],
    credentials: true,
  })
);

app.get("/api/test", (req, res) => {
  res.send("API Working");
});

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