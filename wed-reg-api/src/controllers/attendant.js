import { db } from "../index.js";

export const getAttendantsInParty = async (req, res) => {
  try {
    const { lastName, invitationID } = req.body;
    let sql = `SELECT * FROM attendees WHERE invitationID = '${invitationID}' AND lastName = '${lastName}'`;
    let query = db.query(sql, (err, result) => {
      if (err) res.status(500).json({ error: err });
      else res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const register = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};
