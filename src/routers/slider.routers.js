import express from "express";
const router = express.Router();

import { uploadData, getSliders } from "../controller/slider.controller.js";

router.post("/upload", uploadData);
router.get("/getData", getSliders);

export default router;
