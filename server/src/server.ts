import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import authRouter from "./routes/route.auth";

const app = express();

app.use(cors(
  {
    origin:"https://sh4mnk-auth-mern.vercel.app",
    credentials : true
  }
));
app.use(express.json());

app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});



export { app };