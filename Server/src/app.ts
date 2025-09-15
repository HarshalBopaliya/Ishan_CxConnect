const express = require("express");
const app = express();
import type { Request, Response } from "express";

app.get("/", async (req: Request, res: Response) => {
  return res.status(200).json({
    message: "Hello World",
  });
});

module.exports = app;
