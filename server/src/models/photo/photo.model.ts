import { model, Schema } from "mongoose";
import { IPhoto } from "../../interfaces/photo.interface";

const photoSchema = new Schema<IPhoto>({
  user_id: {
    type: String,
    required: true
  },
  img_url: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  }
});

const Photo = model('photo', photoSchema);

export default Photo;