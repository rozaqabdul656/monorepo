import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (req: Request, res: Response, next: NextFunction): any => {
  const token = req.headers.authorization?.split("Bearer ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded = jwt.decode(token) as { user_id: string } | null;
    if (!decoded || !decoded.user_id) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    req.userId = decoded.user_id;
    next();
  } catch (error) {
    console.log("Error:", error);
    return res.status(403).json({ error: "Invalid token" });
  }
};

export default authMiddleware;
