import { NextFunction, Response } from "express";
import jwt from 'jsonwebtoken';
import { AuthRequest } from "../interfaces/authRequest.interface";
import config from "../config";
import { getUserById } from "../models/user/user.query";

export const authMiddleware = async (req:AuthRequest, res: Response, next: NextFunction) => {
  try {
    const authHeaders = req.headers["authorization"];
    if (!authHeaders) return res.status(401).send({ message: "Unauthorized" });
    const token = authHeaders.split(" ")[1];

    const data = jwt.verify(token, config.JWT_SECRET) as { id: string };
    const user = await getUserById(data.id);

    if (user) {
      req.user = {
        id: user.id,
        name: user.name
      };

      next();
    } else return res.status(401).send({ message: "Unauthorized" });

  } catch (error) {
    console.log(error);
    res.status(500).send({ message: (error as Error).message });
  }
}