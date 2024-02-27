import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import config from './config';
import userRouter from './routers/user.router';
import photoRouter from './routers/photo.router';

const app = express();

app.use(cors({
  origin: config.CORS_ORIGIN,
  credentials: true,
  exposedHeaders: ["Authorization"],
}));

app.use(express.json());

app.use('/user', userRouter);
app.use('/photos', photoRouter);

(async function bootstrap() {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log('🍀 Connected to MongoDB.');
    app.listen(config.PORT, () => console.log('🚀 Server is connected on port', config.PORT, '.'));
  } catch (error) {
    console.error(error);
  }
})();