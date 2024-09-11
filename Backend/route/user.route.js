import express from "express";
import { signup,login } from "../controler/user.controller.js";
const router = express.Router();

router.post("/signup", signup); // Fix typo 'singnup' -> 'signup'
router.post("/login", login);
export default router;


