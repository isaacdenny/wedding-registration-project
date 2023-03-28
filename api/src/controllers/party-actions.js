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
          return res.status(500).json({ error: err });
        } else console.log(result);
      });
    });
    return res.status(201).json({ message: "Party added" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

export const deleteParty = async (req, res) => {
  try {
    const { invitationID } = await req.body;
    let sql = `DELETE FROM attendants WHERE invitationID = '${invitationID}'`;
    let query = db.query(sql, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      else return res.status(200).json(result);
    });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export const updateParty = async (req, res) => {
  try {
    const { party } = req.body;
    party.forEach((element) => {
      let sql = `UPDATE attendants SET name = '${element.name}', partyName = '${element.partyName}', invitationID = '${element.invitationID}', isAttending = ${element.isAttending} WHERE (uuid='${element.uuid}')`;
      let query = db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        else console.log(result);
      });
    });
    res.status(200).json({ message: "Successfully updated party members" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};