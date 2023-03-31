import express from "express";
import { db } from "../index.js";

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
    let query = db.query(sql, newAttendee, (err) => {
      if (err) throw err;
    });
    res.status(201).json({ message: "Successfully added attendant" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/", async (req, res) => {
  try {
    let sql = "SELECT * FROM attendants";
    let query = db.query(sql, (err, result) => {
      if (err) throw err
      else res.status(200).json(result)
    });
    
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
router.post("/", async (req, res) => {
  try {
    const { party } = req.body;
    let toInsert = [];
    let keys = "(name, partyName, invitationID, isAttending)";

    party.forEach((att) => {
      toInsert.push(
        `( '${att.name}', '${att.partyName}', '${att.invitationID}', ${att.isAttending} )`
      );
    });

    let sql = `INSERT INTO attendants ${keys} VALUES ${toInsert.join(", ")}`;
    let query = db.query(sql, (err) => {
      if (err) throw err;
    });

    res.status(201).json({ message: "Successfully added party" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.patch("/", async (req, res) => {
  try {
    const { uuid, name, partyName, invitationID, isAttending } = await req.body;
    let sql = `UPDATE attendants SET name = '${name}', partyName = '${partyName}', invitationID = '${invitationID}', isAttending = ${isAttending} WHERE (uuid='${uuid}')`;
    let query = db.query(sql, (err) => {
      if (err) throw err;
    });
    res.status(200).json({ message: "Successfully updated attendant" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
router.patch("/party", async (req, res) => {
  try {
    const { party } = req.body;
    party.forEach((att) => {
      let sql = `UPDATE attendants SET name = '${att.name}', partyName = '${att.partyName}', invitationID = '${att.invitationID}', isAttending = ${att.isAttending} WHERE (uuid='${att.uuid}')`;
      let query = db.query(sql, (err) => {
        if (err) throw err;
      });
    });
    res.status(200).json({ message: "Successfully updated party" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.delete("/", async (req, res) => {
  try {
    const { uuid } = await req.body;
    let sql = `DELETE FROM attendants WHERE (uuid='${uuid}')`;
    let query = db.query(sql, (err, result) => {
      if (err) throw err;
    });
    res.status(200).json({ message: "Successfully deleted attendant" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.delete("/party", async (req, res) => {
  try {
    const { invitationID } = await req.body;
    let sql = `DELETE FROM attendants WHERE invitationID = '${invitationID}'`;
    let query = db.query(sql, (err) => {
      if (err) throw err;
    });
    res.status(200).json({ message: "Successfully deleted party" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;
