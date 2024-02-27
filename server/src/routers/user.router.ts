import { Router } from "express";
import { getAuthUser, userLogin } from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";
const userRouter = Router();

userRouter.post('/login', userLogin);
userRouter.get('/auth', authMiddleware, getAuthUser);

export default userRouter;