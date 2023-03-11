import fastcsv from "fast-csv";
import { db } from "../index.js";
import fs from "fs";
const ws = fs.createWriteStream("data.csv");

export const writeCsv = (req, res) => {
  try {
    // const { data } = req.body;
    let sql = "SELECT * FROM attendants";
    let query = db.query(sql, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      } else {
        let csv = "First Name,Last Name,Invitation ID,Is Attending\n";
        for (let i = 0; i < result.length; i++) {
          csv +=
            result[i].firstName +
            "," +
            result[i].lastName +
            "," +
            result[i].invitationID +
            "," +
            result[i].isAttending +
            "\n";
        }
        res.status(200).json(csv);
      }
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
