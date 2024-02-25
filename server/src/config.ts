import dotenv from 'dotenv';
dotenv.config();

const config = {
  PORT: process.env.PORT ?? 3000,
  CORS_ORIGIN: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : '*',
  MONGO_URI: process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/event-photo-bucket',
  CLOUD_PRESET: process.env.CLOUD_PRESET ?? 'cloudinary-preset',
  CLOUD_NAME: process.env.CLOUD_NAME ?? 'cloudinary-cloud-name'
}

export default config;