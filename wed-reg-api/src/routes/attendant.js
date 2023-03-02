import express from "express";
import { getAttendantsInParty } from "../controllers/attendant.js";
import { register } from "../controllers/attendant.js";

const router = express.Router();

router.post("/getAttendants", getAttendantsInParty);

router.post("/register", register);

export default router;
