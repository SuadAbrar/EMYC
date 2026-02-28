const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  userName: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
    unique: true,
  },
  profilePic: String,
  password: String,
  bio: String,
});

const User = mongoose.model("User", UserSchema);

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

module.exports = User;
