import express from "express";
import { signUp } from "../../Controllers/Auth/auth.controller.js";

const router = express.Router();

router.route("/sign-up").post(signUp);

export default router;