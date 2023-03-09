import { db } from "../index.js";

export const addAttendant = async (req, res) => {
  try {
    const { firstName, lastName, invitationID, isAttending } = await req.body;
    let newAttendee = {
      firstName: firstName,
      lastName: lastName,
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
};

export const deleteAttendant = async (req, res) => {
  try {
    const { id } = await req.body;
    let sql = `DELETE FROM attendants WHERE (id='${id}')`;
    let query = db.query(sql, (err, result) => {
      if (err) res.status(500).json({ error: err });
      else res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updateAttendant = async (req, res) => {
  try {
    const { id, firstName, lastName, invitationID, isAttending } =
      await req.body;
    let sql = `UPDATE attendants SET firstName = '${firstName}', lastName = '${lastName}', invitationID = '${invitationID}', isAttending = ${isAttending} WHERE (id='${id}')`;
    let query = db.query(sql, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      else return res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


