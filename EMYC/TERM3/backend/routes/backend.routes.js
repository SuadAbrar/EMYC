const express = require("express");
const router = express.Router();
// import { Router } from "express";
// const router = Router();

const { createUser } = require("../controllers/backendController.js");
router.post("/createUser", createUser);
const { getUser } = require("../controllers/backendController.js");
router.get("/getUser", getUser);

module.exports = router;
// export default router;
