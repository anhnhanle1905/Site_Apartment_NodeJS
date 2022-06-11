import express from "express";
const router = express.Router();

import { uploadData, getIcons } from "../controller/icon.controller.js";

router.post("/upload", uploadData);
router.get("/getData", getIcons);

export default router;
