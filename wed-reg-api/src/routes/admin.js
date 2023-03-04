import express from "express";
import {
  addAttendant,
  deleteAttendant,
  deleteParty,
  getAttendants,
  getAttendants,
  getParty,
  updateAttendant,
} from "../controllers/admin.js";

const router = express.Router();

router.get("/getAttendees", getAttendants);
router.get("/getAttendee", getAttendants);
router.get("/getParty", getParty);
router.post("/addAttendee", addAttendant);
router.patch("/updateAttendee", updateAttendant);
router.delete("/deleteAttendee", deleteAttendant);
router.delete("/deleteParty", deleteParty);

export default router;
