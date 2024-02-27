import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { createUser, getUserById } from "../models/user/user.query";
import { AuthRequest } from "../interfaces/authRequest.interface";
import config from "../config";

export const userLogin = async (req: Request, res: Response) => {
  try {
    const { id, name } = req.body;
    const userCheck = await getUserById(id);

    if (!userCheck) {
      const newUser = await createUser(id, name);
      const token = jwt.sign({ id: newUser.id }, config.JWT_SECRET);
      res.setHeader("Authorization", "Bearer " + token);
    } else {
      const token = jwt.sign({ id: userCheck.id }, config.JWT_SECRET);
      res.setHeader("Authorization", "Bearer " + token);
    }

    res.send({ status: 'Success' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: (error as Error).message });
  }
}

export const getAuthUser = async (req: AuthRequest, res: Response) => {
  try {
    const { user } = req;
    if (user) res.send(user);
    else res.status(401).send({ message: 'Unauthorized.'});
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: (error as Error).message });
  }
}