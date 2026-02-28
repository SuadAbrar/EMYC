const { default: mongoose } = require("mongoose");

const courseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    // match: /pattern/,
  },
  category: {
    type: String,
    required: true,
    enum: ["web", "mobile", "network"],
    lowercase: true,
    // uppercase: true,
    trim: true,
  },
  author: String,
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
