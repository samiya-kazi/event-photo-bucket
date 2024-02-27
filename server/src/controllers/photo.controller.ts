import { Response } from "express";
import { AuthRequest } from "../interfaces/authRequest.interface";
import { createPhoto, getAllPhotosWithUser, getUserPhotosById } from "../models/photo/photo.query";

export const postPhoto = async (req: AuthRequest, res: Response) => {
  try {
    const { user } = req;
    if (!user) return res.status(401).send({ message: 'Unauthorized.'});

    const { img_url } = req.body;
    const newPhoto = await createPhoto(user.id, img_url);
    res.status(201).send(newPhoto);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: (error as Error).message });
  }
}

export const getUserPhotos = async (req: AuthRequest, res: Response) => {
  try {
    const { user } = req;
    if (!user) return res.status(401).send({ message: 'Unauthorized.'});

    const photos = await getUserPhotosById(user.id);
    res.send({ photos, user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: (error as Error).message });
  }
}

export const getAllPhotos = async (req: AuthRequest, res: Response) => {
  try {
    const { user } = req;
    if (!user) return res.status(401).send({ message: 'Unauthorized.'});

    const photos = await getAllPhotosWithUser();
    res.send(photos);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: (error as Error).message });
  }
}