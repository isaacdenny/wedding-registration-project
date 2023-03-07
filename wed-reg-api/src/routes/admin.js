import express from "express";
import {
  addAttendant,
  deleteAttendant,
  deleteParty,
  getAll,
  getByName,
  getParty,
  updateAttendant,
  updateParty,
} from "../controllers/admin.js";

const router = express.Router();

router.post("/getByName", getByName);
router.put("/addAttendant", addAttendant);
router.post("/getAll", getAll);

router.post("/getParty", getParty);
router.delete("/deleteParty", deleteParty);
router.post("/updateParty", updateParty);
router.patch("/updateAttendant", updateAttendant);
router.delete("/deleteAttendant", deleteAttendant);

export default router;
