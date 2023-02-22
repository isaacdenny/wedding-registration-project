import express from "express";
import {
  addAttendee,
  deleteAttendee,
  deleteParty,
  getAttendee,
  getAttendees,
  getParty,
  updateAttendee,
} from "../controllers/admin.js";

const router = express.Router();

router.get("/getAttendees", getAttendees);
router.get("/getAttendee", getAttendee);
router.get("/getParty", getParty);
router.post("/addAttendee", addAttendee);
router.patch("/updateAttendee", updateAttendee);
router.delete("/deleteAttendee", deleteAttendee);
router.delete("/deleteParty", deleteParty);

export default router;