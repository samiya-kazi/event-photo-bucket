import { IPhoto } from "../../interfaces/photo.interface";
import { IUser } from "../../interfaces/user.interface";
import Photo from "./photo.model";

export const getUserPhotosById = async (user_id: string) => {
  try {
    const photos = await Photo.find({ user_id });
    return photos;
  } catch (error) {
    console.log(error);
    throw new Error('Error getting user photos by user ID.');
  }
}

export const createPhoto = async (user_id: string, img_url: string) => {
  try {
    const photo = await Photo.create({ user_id, img_url, timestamp: new Date() });
    return photo;
  } catch (error) {
    console.log(error);
    throw new Error('Error creating photo.');
  }
}

export const getAllPhotosWithUser = async () => {
  try {
    const photos = await Photo.aggregate<IPhoto & { user: IUser }>([
      {
        $lookup: {
          from: 'users',
          localField: 'user_id',
          foreignField: 'id',
          as: 'user'
        }
      },
      {
        $unwind: "user"
      }
    ]);

    return photos;
  } catch (error) {
    console.log(error);
    throw new Error('Error getting all photos.');
  }
}