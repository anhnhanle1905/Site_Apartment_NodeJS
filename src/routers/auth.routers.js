import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {
  registerUser,
  loginUser,
  changePw,
  logOut,
} from "../controller/auth.controller.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/changePw", changePw);
router.post("/logOut", auth, logOut);

export default router;
