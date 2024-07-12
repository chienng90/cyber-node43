import express from "express";
import { createCode, getCodes } from "../controllers/code.controller.js";


const codeRouter = express.Router();

codeRouter.get("/codes", getCodes);
codeRouter.post("/codes", createCode)

export default codeRouter;