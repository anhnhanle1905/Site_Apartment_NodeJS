import express from "express";
const router = express.Router();

import { uploadData, getAgents } from "../controller/agent.controller.js";

router.post("/upload", uploadData);
router.get("/getData", getAgents);

export default router;
