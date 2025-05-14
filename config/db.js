require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Gagal terhubung ke database:", err.stack);
    return;
  }
  console.log("✅ Terhubung ke database dengan ID:", connection.threadId);
});

module.exports = connection;
