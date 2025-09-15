import type { Request, Response } from "express";
import { HttpStatus } from "../types/index.js";

export const login = (req: Request, res: Response) => {
  return res.status(200).json({
    message: "Logged In Successfully.",
  });
};

export const register = (req: Request, res: Response) => {
  return res.status(201).json({
    message: "Users Created Successfully.",
  });
};

export const logout = (req: Request, res: Response) => {
  return res.status(HttpStatus.OK).json({
    message: "Logged out successfully",
  });
};
