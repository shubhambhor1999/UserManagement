const { Sequelize } = require("sequelize");

// Load environment variables from .env file
require("dotenv").config();

// Initialize Sequelize with database credentials from .env file
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

module.exports = sequelize;
