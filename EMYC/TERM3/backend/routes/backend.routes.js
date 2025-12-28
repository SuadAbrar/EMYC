const express = require("express");
const router = express.Router();
// import { Router } from "express";
// const router = Router();

const {
  createUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/backendController.js");
// const { getUser } = require("../controllers/backendController.js");
// const { getUserById } = require("../controllers/backendController.js");
router.post("/createUser", createUser);
router.get("/getUser", getUser);
router.get("/getUser/:id", getUserById);
router.put("/updatedUser/:id", updateUser);
router.delete("/deletedUser/:id", deleteUser);

module.exports = router;
// export default router;
