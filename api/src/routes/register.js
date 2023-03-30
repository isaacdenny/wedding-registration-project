import express from "express";
import { connectDB, db } from "../index.js";

const router = express.Router();

router.post("/getAttendants", async (req, res) => {
  try {
    if (!db) {
      console.log("No database connected. Reconnecting...");
      connectDB();
    }
    const { partyName, invitationID } = req.body;
    let sql = `SELECT * FROM attendants WHERE invitationID = '${invitationID}' AND partyName = '${partyName}'`;
    let query = db.query(sql, (err, result) => {
      if (err) res.status(400).json({ error: err });
      else res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { attendants } = req.body;
    const toReturn = res.status(200).json({ message: "Successfully updated attendants" });
    attendants.map((row, i) => {
      let sql = `UPDATE attendants SET isAttending = ${row.isAttending} WHERE (name = '${row.name}' AND invitationID = '${row.invitationID}')`;
      try {
        let query = db.query(sql, (err) => {
          if (err) {
            console.log(err);
            toReturn = res.status(400).json({ error: err });
          }
        });
      } catch (error) {
        console.log(error);
      }
    });
    return toReturn;
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
});

export default router;
