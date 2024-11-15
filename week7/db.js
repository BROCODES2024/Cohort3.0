const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const Todo = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: "users" },
  title: String,
  done: Boolean,
});

const Usermodel = mongoose.model("users", User);
const Todomodel = mongoose.model("todos", Todo);

// Exporting models
module.exports = {
  Usermodel: Usermodel,
  Todomodel: Todomodel,
};
