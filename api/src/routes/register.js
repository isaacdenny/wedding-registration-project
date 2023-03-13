import express from "express";
import { getAttendantsInParty } from "../controllers/register.js";
import { register } from "../controllers/register.js";

const router = express.Router();

router.post("/getAttendants", getAttendantsInParty);

router.post("/", register);

export default router;
