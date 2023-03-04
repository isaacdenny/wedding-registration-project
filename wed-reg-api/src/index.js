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

const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
//const MYSQL_PORT = process.env.MYSQL_PORT;
/* CREATE DATABASE CONNECTION */
export const db = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
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

app.listen(PORT, () => { 
  console.log(`Listening at http://localhost:${PORT}`);
})
