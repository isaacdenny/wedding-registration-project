import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql";
import helmet from "helmet";
import adminRoutes from "./routes/admin.js";
import attendantRoutes from "./routes/attendant.js";
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
app.use("/attendant", attendantRoutes);
app.use("/admin", adminRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
