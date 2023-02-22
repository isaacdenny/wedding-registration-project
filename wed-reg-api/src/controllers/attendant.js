import { db } from "../index.js"

export const getAttendees = async (req, res) => {
  try {
    let sql = "SELECT * FROM attendees";
    let query = db.query(sql, (err, result) => {
      if (err) res.status(500).json({ error: err });
      else res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};