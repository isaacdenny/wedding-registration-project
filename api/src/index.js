import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql";
import helmet from "helmet";
import https from "https";
import fs from "fs";
import adminRoutes from "./routes/admin.js";
import registerRoutes from "./routes/register.js";
import authRoutes from "./routes/auth.js";
import { verifyToken } from "./controllers/verifyToken.js";
import { downloadCsv } from "./controllers/csv.js";

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
app.get("/downloadcsv", downloadCsv);
app.use("/register", registerRoutes);
app.use("/admin", verifyToken, adminRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 8080;
const options = {
  key: fs.readFileSync("./ssl/allieandisaacwedding_site.key"),
  cert: fs.readFileSync("./ssl/allieandisaacwedding_site_chain.crt"),
}

https.createServer(options, app).listen(PORT, () => console.log(`Listening at https://localhost:${PORT}`))
