import express from "express";
import {
  addAttendant,
  deleteAttendant,
  deleteParty,
  getAttendants,
  getAttendant,
  getParty,
  updateAttendant,
} from "../controllers/admin.js";

const router = express.Router();

router.get("/getAttendants", getAttendants);
router.get("/getAttendant", getAttendant);
router.get("/getParty", getParty);
router.post("/addAttendant", addAttendant);
router.patch("/updateAttendant", updateAttendant);
router.delete("/deleteAttendant", deleteAttendant);
router.delete("/deleteParty", deleteParty);

export default router;
