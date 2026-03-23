const express = require('express');
const mysql = require('mysql2');
const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "testdb"
});

app.get('/api', (req, res) => {
  db.query("SELECT 'Hello from Backend + DB' AS msg", (err, result) => {
    if (err) return res.send("DB Error");
    res.send(result[0].msg);
  });
});

app.listen(3000, () => console.log("Backend running"));