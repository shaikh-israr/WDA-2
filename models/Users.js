const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Userschema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("Users", Userschema);
module.exports = Users;
