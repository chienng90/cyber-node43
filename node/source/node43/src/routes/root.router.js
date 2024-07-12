import express from "express";
import userRouter from "./user.router.js";
import codeRouter from "./code.router.js";

const rootRouter = express.Router()

rootRouter.use("/node", userRouter)
rootRouter.use("/node", codeRouter)

export default rootRouter