import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import mysql from "mysql" 
import helmet from "helmet"

/* LOAD ENV */
dotenv.config()

// /* CREATE DATABASE CONNECTION */
// const MYSQL_USER = process.env.MYSQL_USER
// const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD
// const MYSQL_DB_NAME = process.env.MYSQL_DB_NAME
// export const db = mysql.createConnection({
//   host: "wed-reg-db",
//   user: "root",
//   port: "3307",
//   password: "root",
//   database: "wedding"
// })

// db.connect((err) => { 
//   if (err) console.log(err)
//   else console.log("Database connected")
// })

/* CONFIGURATIONS */
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))