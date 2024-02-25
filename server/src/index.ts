import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import config from './config';

const app = express();

app.use(cors({
  origin: config.CORS_ORIGIN
}));

(async function bootstrap() {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log('🍀 Connected to MongoDB.');
    app.listen(config.PORT, () => console.log('🚀 Server is connected on port', config.PORT, '.'));
  } catch (error) {
    console.error(error);
  }
})();