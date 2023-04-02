import express from "express";
import jwt from "jsonwebtoken";
import { db } from "../index.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    let toReturn = null;
    if (!username || !password) {
      toReturn = res.status(400).json({ error: "All fields are required" });
    } else {
      let sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
      let query = db.query(sql, (err, result) => {
        if (err) throw err;
        else {
          const user = result[0];
          if (!user) {
            toReturn = res.status(401).json({ error: "Invalid credentials" });
          } else {
            const exp = Math.floor(Date.now() / 1000) + 60 * 60
            const token = jwt.sign(
              {
                exp: exp,
                data: { user: user.username, password: user.password },
              },
              process.env.JWT_SECRET
            );
            toReturn = res.status(200).json({ token: token, user: user, exp: exp });
          }
        }
      });
    }
    return toReturn;
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;
