import express from "express";
import { db } from "../index.js";
import {
  deleteAttendant,
  updateAttendant,
} from "../controllers/attendant-actions.js";
import {
  addParty,
  deleteParty,
  updateParty
} from "../controllers/party-actions.js";

const router = express.Router();

router.put("/", async (req, res) => {
  try {
    const { name, partyName, invitationID, isAttending } = await req.body;
    let newAttendee = {
      name: name,
      partyName: partyName,
      invitationID: invitationID,
      isAttending: isAttending,
    };
    let sql = "INSERT INTO attendants SET ?";
    let query = db.query(sql, newAttendee, (err, result) => {
      if (err) res.status(500).json({ error: err });
      else res.status(201).json(result);
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/", async (req, res) => {
  try {
    let sql = "SELECT * FROM attendants";
    let query = db.query(sql, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      else return res.status(200).json(result);
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
});
router.post("/addParty", addParty);

router.patch("/updateParty", updateParty);
router.patch("/updateAttendant", updateAttendant);

router.delete("/deleteParty", deleteParty);
router.delete("/deleteAttendant", deleteAttendant);

export default router;
