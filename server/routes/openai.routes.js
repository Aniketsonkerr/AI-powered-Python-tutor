import express from "express";
import { chat } from "../controller/openai.controller.js";

const router = express.Router();

router.post("/chat", chat);

export default router;
