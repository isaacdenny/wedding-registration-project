import express from "express";
import { connectDB, db } from "../index.js";

const router = express.Router();

router.get("/:partyName-:invitationID", async (req, res) => {
  try {
    let toReturn = null;
    const { partyName, invitationID } = req.params;
    let sql = `SELECT * FROM attendants WHERE invitationID = '${invitationID}' AND partyName = '${partyName}'`;
    let query = db.query(sql, (err, result) => {
      if (err) throw err;
      else if (result.length <= 0) {
        toReturn = res.status(401).json({ error: "Invalid Credentials" })
      }
      else {
        toReturn = res.status(200).json(result)
      }
    });
    return toReturn
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { attendants } = req.body;
    let toReturn = res.status(200).json({ message: "Successfully updated attendants" });
    attendants.map((row, i) => {
      let sql = `UPDATE attendants SET isAttending = ${row.isAttending} WHERE (name = '${row.name}' AND invitationID = '${row.invitationID}')`;
      let query = db.query(sql, (err) => {
        if (err) throw err;
      });
    });
    return toReturn;
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;
