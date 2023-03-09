import express from "express";
import {
  addAttendant,
  deleteAttendant,
  updateAttendant,
} from "../controllers/attendant-actions.js";
import {
  getParty,
  addParty,
  deleteParty,
  updateParty
} from "../controllers/party-actions.js";

import {
  getAll,
  getByName
} from "../controllers/search.js";

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
