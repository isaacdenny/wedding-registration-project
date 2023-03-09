import express from "express";
import {
  addAttendant,
  addParty,
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

router.put("/getParty", getParty);
router.delete("/deleteParty", deleteParty);
router.post("/addParty", addParty);
router.patch("/updateParty", updateParty);
router.patch("/updateAttendant", updateAttendant);
router.delete("/deleteAttendant", deleteAttendant);

export default router;
