const { Pool } = require("pg");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

// Initialize server
const app = express();
app.set("trust proxy", true);

// Allow cors
app.use(cors());
app.use(bodyParser.json({ limit: "4MB" }));
const port = process.env.PORT || 9000;

// Start server
console.log("mode: ", process.env.NODE_ENV);
app.listen(port, () => console.log(`Listening on port ${port}`));

// Create pool
const pool = new Pool({
  host: "postgres", // Container host name
  port: 5432,
  user: (db_user = fs.readFileSync("/run/secrets/db_user", "utf8")),
  password: (db_user_pw = fs.readFileSync("/run/secrets/db_user_pw", "utf8")),
  database: "name_data_db",
  max: 20, // Max amount of connections
});

// API routes

// GET /api/names                   Returns all names
// GET /api/names?orderBy={param}   Returns all names ordered by name or amount
// GET /api/names?name={param}      Returns one name that matches given parameter
app.get("/api/names", async (req, res) => {
  let { orderBy, name } = req.query;

  // Compare the "orderBy" query param to whitelisted words
  if (["name", "amount"].includes(orderBy)) orderBy = `ORDER BY ${orderBy}`;
  else if (["-name", "-amount"].includes(orderBy))
    orderBy = `ORDER BY ${orderBy.slice(1)} DESC`;
  else orderBy = "";

  // Check that the "name" query param contains only allowed characters
  if (name?.match("^$|^[A-Za-zäöåÄÖÅ]+$"))
    name = `WHERE lower(name) = lower('${name}')`;
  else name = "";

  try {
    results = await pool.query(
      `SELECT name, amount FROM names ${name} ${orderBy};`
    );
    res.status(200).json(results.rows);
  } catch (err) {
    console.log(err.code, ": ", err.message);
    res.status(500).send("Server error: Error in database query");
  }
});

// GET /api/names/total             Returns the total amount of all names
app.get("/api/names/total", async (req, res) => {
  try {
    results = await pool.query(`SELECT SUM(amount) AS total FROM names;`);
    res.status(200).json(results.rows);
  } catch (err) {
    console.log(err.code, ": ", err.message);
    res.status(500).send("Server error: Error in database query");
  }
});
