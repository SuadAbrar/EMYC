const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: {
    type: String,
    ref: "User",
  },
  context: {
    type: String,
    required: true,
  },
});
