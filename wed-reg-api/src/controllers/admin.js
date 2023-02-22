import { db } from "../index.js";

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

export const getAttendee = async (req, res) => { 
  try {
    let sql = `SELECT * FROM students WHERE (FirstName LIKE '%${FirstName}%' OR LastName LIKE '%${LastName}%')`;
    let query = db.query(sql, (err, result) => { 
      if (err) res.status(500).json({ error: err });
      else res.status(200).json(result);
    })
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

export const addAttendee = async (req, res) => {
  try {
    const { FirstName, LastName, PartyID } = await req.body;
    let newAttendee = {
      FirstName: FirstName,
      LastName: LastName,
      PartyID: PartyID,
    };
    let sql = "INSERT INTO attendees SET ?";
    let query = db.query(sql, newAttendee, (err, result) => {
      if (err) res.status(500).json({ error: err });
      else res.status(201).json(result);
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const removeAttendee = async (req, res) => {
  try {
    const { FirstName, LastName } = await req.body;
    let sql = `DELETE FROM attendees WHERE (FirstName='${FirstName}' AND LastName='${LastName}')`;
    let query = db.query(sql, (err, result) => {
      if (err) res.status(500).json({ error: err });
      else res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// export const updateAttendee = async (req, res) => { 
//   try {
//     const { FirstName, LastName, PartyID } = await req.body;
//     let sql = `UPDATE attendees SET FirstName = '${FirstName}', LastName = '${LastName}', Party`
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// }

export const getParty = async (req, res) => { 
  try {
    const { PartyID } = await req.body
    let sql = `SELECT * FROM attendies WHERE PartyID = '${PartyID}'`;
    let query = db.query(sql, (err, result) => {
      if (err) res.status(500).json({ error: err })
      else res.status(200).json(result)
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

export const removeParty = async (req, res) => {
  try {
    const { PartyID } = await req.body;
    let sql = `DELETE FROM attendies WHERE PartyID = '${PartyID}'`;
    let query = db.query(sql, (err, result) => {
      if (err) res.status(500).json({ error: err });
      else res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
