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

export const getParty = async (req, res) => {
  try {
    const { invitationID } = await req.body;
    let sql = `SELECT * FROM attendants WHERE invitationID = '${invitationID}'`;
    let query = db.query(sql, (err, result) => {
      if (err) res.status(500).json({ error: err });
      else res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const addParty = async (req, res) => {
  try {
    const { party } = req.body;
    console.log(party);
    party.forEach(element => {
      let sql = `INSERT INTO attendants SET ?`;
      let query = db.query(sql, element, (err, result) => { 
        if (err) {
          console.log(err)
          res.status(500).json({ error: err });
        } 
        else console.log(result);
      })
    });
    res.status(201).json({ message: "Party added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const deleteParty = async (req, res) => {
  try {
    const { invitationID } = await req.body;
    let sql = `DELETE FROM attendants WHERE invitationID = '${invitationID}'`;
    let query = db.query(sql, (err, result) => {
      if (err) res.status(500).json({ error: err });
      else res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updateParty = async (req, res) => {
  try {
    const { party } = req.body;
    party.forEach((element) => {
      let sql = `UPDATE attendants SET firstName = '${element.firstName}', lastName = '${element.lastName}', invitationID = '${element.invitationID}', isAttending = ${element.isAttending} WHERE (id='${element.id}')`;
      let query = db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err })
        else console.log(result)
      });
    });
    res.status(200).json({ message: "Successfully updated party members" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
