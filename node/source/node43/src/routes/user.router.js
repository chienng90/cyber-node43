import { getUsers, getUser } from "../controllers/user.controller.js";
import express from "express";

const userRouter = express.Router();

userRouter.get("/users", getUsers);
userRouter.get("/users/:id", getUser);

export default userRouter