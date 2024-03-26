const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

// Define routes for CRUD operations
router.post("/createUser", UserController.createUser);
router.get("/getAllUser", UserController.getAllUsers);
router.get("/getSingleUser/:id", UserController.getUserById);
router.put("/updateUser/:id", UserController.updateUser);
router.delete("/deleteUser/:id", UserController.deleteUser);

module.exports = router;
