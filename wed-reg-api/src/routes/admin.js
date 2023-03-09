import express from "express";
import {
  addAttendant,
  deleteAttendant,
  updateAttendant,
} from "../controllers/attendant-actions.js";
import {
  addParty,
  deleteParty,
  updateParty
} from "../controllers/party-actions.js";

import {
  getAll,
  getByName
} from "../controllers/search.js";

const router = express.Router();

router.put("/addAttendant", addAttendant);

router.post("/getByName", getByName)
router.post("/getAll", getAll);
router.post("/addParty", addParty);

router.patch("/updateParty", updateParty);
router.patch("/updateAttendant", updateAttendant);

router.delete("/deleteParty", deleteParty);
router.delete("/deleteAttendant", deleteAttendant);

export default router;
