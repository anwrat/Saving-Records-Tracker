import { Router } from "express";
import { getAllUsers, addUser } from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.post("/", addUser);

export default userRouter;
