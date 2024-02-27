import { model, Schema } from "mongoose";
import { IUser } from "../../interfaces/user.interface";

const userSchema = new Schema<IUser>({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  }
});

const User = model('user', userSchema);

export default User;