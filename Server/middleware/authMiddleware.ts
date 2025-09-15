import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JwtPayload } from "./types";
import { HttpStatus } from "../src/types";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token)
    return res
      .status(HttpStatus.UNAUTHORIZED)
      .json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    (req as any).user = decoded; // attach user to request
    next();
  } catch (err) {
    return res.status(HttpStatus.FORBIDDEN).json({ message: "Invalid token" });
  }
};
