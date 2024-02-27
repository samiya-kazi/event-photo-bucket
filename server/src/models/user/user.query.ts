import User from "./user.model";

export const getUserById = async (id: string) => {
  try {
    const user = await User.findOne({ id });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Error getting user by ID.');
  }
}

export const createUser = async (id: string, name: string) => {
  try {
    const user = await User.create({ id, name });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Error creating new user in DB.');
  }
}