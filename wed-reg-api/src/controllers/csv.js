import fastcsv from "fast-csv";
import { db } from "../index.js";
import fs from "fs";
const fileName = "data.csv";
const ws = fs.createWriteStream(fileName);

export const downloadCsv = (req, res) => {
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

export const uploadCsv = (req, res) => {
  try {
    const { data } = req.body;
    fastcsv
      .write(data, { headers: true })
      .on("finish", () => {
        console.log("Successfully wrote data to csv");
      })
      .pipe(ws);
    let sql = `LOAD DATA INFILE '${fileName}' INTO TABLE discounts FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;`;
    let query = db.query(sql, (err, result) => {
      if (err) res.status(500).json({ error: err });
      else res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
