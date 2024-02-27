import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { getAllPhotos, getUserPhotos, postPhoto } from "../controllers/photo.controller";
const photoRouter = Router();

photoRouter.get('/all', authMiddleware, getAllPhotos);
photoRouter.get('/user', authMiddleware, getUserPhotos);
photoRouter.post('/new', authMiddleware, postPhoto);

export default photoRouter;