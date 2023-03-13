import jwt from "jsonwebtoken"
import { db } from "../index.js"

export const login = async (req, res) => { 
  try {
    const { username, password } = req.body
    if (!username || !password) {
      return res.status(400).json({ error: "All fields are required" })
    }
    else {
      console.log(username, password)
      let sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`
      let query = db.query(sql, (err, result) => { 
        if (err) {
          return res.status(err).json({ error: err })
        }
        else {
          console.log(result)
          const user = result[0]
          if (!user) { 
            return res.status(401).json({ error: "Invalid credentials" })
          }
          const token = jwt.sign({ user: user.username, password: user.password }, process.env.JWT_SECRET);
          return res.status(200).json( { token: token, user: user} )
        }
      })
    }
  } catch (error) {
    return res.status(500).json({ error: error })
  }
}