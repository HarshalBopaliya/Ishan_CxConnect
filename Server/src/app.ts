import express from "express";
import type { Request, Response } from "express";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", async (req: Request, res: Response) => {
  return res.status(200).json({
    message: "Hello World",
  });
});

export default app;
