import { db } from "../index.js";

export const getAttendantsInParty = async (req, res) => {
  try {
    const { lastName, invitationID } = req.body;
    //let sql = `SELECT * FROM attendants WHERE invitationID = '${invitationID}' AND lastName = '${lastName}'`;
    let sql = `SELECT * FROM attendants WHERE invitationID = '${invitationID}'`;
    let query = db.query(sql, (err, result) => {
      if (err) res.status(400).json({ error: err });
      else res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const register = async (req, res) => {
  try {
    const attendants = [];
    req.body.map((row) => {
      attendants.push(row);
    });
    attendants.map((row, i) => {
      let sql = `UPDATE attendants SET isAttending = ${row.isAttending} WHERE firstName = '${row.firstName}' AND invitationID = '${row.invitationID}'`;
      let query = db.query(sql, (err, result) => {
        if (err) {
          return res.status(400).json({ error: err });
        } else {
          console.log(result);
        }
      });
    });
    return res.status(200).json({ message: "Successfully updated attendants" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};
