const express = require("express");
const backendRoutes = require("./routes/backend.routes.js");
const db = require("./config/db.config.js");
const course = require("./models/course.model.js");
const User = require("./models/user.model.js");
// const { default: mongoose } = require("mongoose");
// import express from "express";
// import backendRoutes from "./routes/backend.routes.js";

const app = express();
const port = 3000;
db();

app.use(express.json());
// app.use("/post", backendRoutes);
// app.use("/api/user", user);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/", (req, res) => {
//   const courses = course.find({ author: "Suad", isPublished: true });

//   res.send(courses);
// });

app.get("/api/users", async (req, res) => {
  const users = course.find();

  res.send(users);
});

app.post("/api/user", async (req, res) => {
  const { name, userName, phone, profilePic, password, bio } = req.body;
  try {
    let user = await User({
      name,
      userName,
      phone,
      profilePic,
      password,
      bio,
    });

    await user.save();

    res.status(200).json(user);
    // res.send(user);
  } catch (e) {
    res.status(500).json({ message: "internal server error" });
  }
});

// async function createUser(name, userName, phone, profilePic, password, bio) {
//   const user = new User({
//     name,
//     userName,
//     phone,
//     profilePic,
//     password,
//     bio,
//   });

//   const result = await user.save();
//   console.log(result);
// }

// createUser("Suad", "suad", "0912345678", "1234", "yes");

// app.post("/data", (req, res) => {
//   const data = req.body;
//   console.log(data);
//   res.send("response");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
