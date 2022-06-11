import express from "express";
const router = express.Router();

import { uploadData, getBlogs } from "../controller/blog.controller.js";

router.post("/upload", uploadData);
router.get("/getData", getBlogs);

export default router;
