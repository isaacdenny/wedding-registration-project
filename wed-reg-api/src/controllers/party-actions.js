import { db } from "../index.js";

export const addParty = async (req, res) => {
  try {
    const { party } = req.body;
    console.log(party);
    party.forEach((element) => {
      let sql = `INSERT INTO attendants SET ?`;
      let query = db.query(sql, element, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({ error: err });
        } else console.log(result);
      });
    });
    res.status(201).json({ message: "Party added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const getParty = async (req, res) => {
  try {
    const { invitationID } = await req.body;
    let sql = `SELECT * FROM attendants WHERE invitationID = '${invitationID}'`;
    let query = db.query(sql, (err, result) => {
      if (err) res.status(500).json({ error: err });
      else res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const deleteParty = async (req, res) => {
  try {
    const { invitationID } = await req.body;
    let sql = `DELETE FROM attendants WHERE invitationID = '${invitationID}'`;
    let query = db.query(sql, (err, result) => {
      if (err) res.status(500).json({ error: err });
      else res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updateParty = async (req, res) => {
  try {
    const { party } = req.body;
    party.forEach((element) => {
      let sql = `UPDATE attendants SET firstName = '${element.firstName}', lastName = '${element.lastName}', invitationID = '${element.invitationID}', isAttending = ${element.isAttending} WHERE (id='${element.id}')`;
      let query = db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        else console.log(result);
      });
    });
    res.status(200).json({ message: "Successfully updated party members" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};