const express = require("express");
const cors = require("cors"); // Import the cors middleware
const app = express();
const userRoutes = require("./routes/userRoutes");
const sequelize = require("./config/database");

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  sequelize.sync({ force: false }).then(() => {
    console.log("Database synced");
  });
});
