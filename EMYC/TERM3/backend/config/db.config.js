const mongoose = require("mongoose");

function db() {
  mongoose
    .connect("mongodb://localhost:27017/mizan")
    .then(() => console.log("Connected!"));
}
module.exports = db;
