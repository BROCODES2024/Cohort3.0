const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectID = mongoose.objectID;
const User = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});
const todo = new Schema({
  userID: objectID,
  title: String,
  done: Boolean,
});
const Usermodel = mongoose.model("users", User);
const todomodel = mongoose.model("todos", todo);
//exporting since they arent in the same file
module.exports = {
  Usermodel: Usermodel,
  todomodel: todomodel,
};
