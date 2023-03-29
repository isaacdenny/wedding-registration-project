import { db } from "../index.js";

export const getAll = async (req, res) => {
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
};

export const getByName = async (req, res) => {
  try {
    const { name, partyName } = req.body;
    let sql = `SELECT * FROM attendants WHERE (name LIKE '%${name}%' OR partyName LIKE '%${partyName}%')`;
    let query = db.query(sql, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      else return res.status(200).json(result);
    });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
