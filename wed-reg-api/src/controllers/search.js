import { db } from "../index.js";

export const getAll = async (req, res) => {
  try {
    const { filter } = req.body;
    let sql = "";
    switch (filter) {
      case "attending":
        sql = "SELECT * FROM attendants WHERE isAttending = true";
        break;
      case "notAttending":
        sql = "SELECT * FROM attendants WHERE isAttending = false";
        break;
      default:
        sql = `SELECT * FROM attendants WHERE (firstName LIKE '%${filter}%' OR lastName LIKE '%${filter}%')`;
        break;
    }
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
    const { firstName, lastName } = req.body;
    let sql = `SELECT * FROM attendants WHERE (firstName LIKE '%${firstName}%' OR lastName LIKE '%${lastName}%')`;
    let query = db.query(sql, (err, result) => {
      if (err) res.status(500).json({ error: err });
      else res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
