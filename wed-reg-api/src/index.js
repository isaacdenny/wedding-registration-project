import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql";
import helmet from "helmet";
import adminRoutes from "./routes/admin.js";
import attendeeRoutes from "./routes/attendant.js";
/* LOAD ENV */
dotenv.config();

/* CREATE DATABASE CONNECTION */
export const db = mysql.createConnection({
  host: "wed-reg-db",
  user: "root",
  password: "root",
  database: "wedding",
});

db.connect((err) => {
  if (err) console.log(err);
  else console.log("Database connected");
});

/* TEST DB CONNECTION */
let sql = "SELECT * FROM attendees";
let query = db.query(sql, (err, result) => {
  if (err) console.log(err);
  else console.log(result);
});

/* CONFIGURATIONS */
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/* ROUTES */
app.get("/", (req, res) => {
  try {
    res.status(200).json({
      message: "Welcome to Isaac and Allie's wedding registration app",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.use("/attendee", attendeeRoutes);
app.use("/admin", adminRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
