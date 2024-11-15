const express = require("express");
const { Usermodel, Todomodel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb+srv://chetanreddyk394:3O58Ur47vciHi2Ib@cluster0.k8wss.mongodb.net/todos"
);

app.use(express.json());

const JWT_SECRET = "CHETAN@REDDY@394";

// Signup endpoint
app.post("/signup", async function (req, res) {
  const { email, password, name } = req.body;

  try {
    await Usermodel.create({ email, password, name });
    res.json({ message: "You are signed up" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Error signing up user" });
  }
});

// Signin endpoint
app.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  try {
    const user = await Usermodel.findOne({ email, password });

    if (user) {
      const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET);
      res.json({ token });
    } else {
      res.status(403).json({ message: "Incorrect Credentials" });
    }
  } catch (error) {
    console.error("Error during signin:", error);
    res.status(500).json({ message: "Error signing in user" });
  }
});

// Placeholder routes for /todo and /todos
app.post("/todo", function (req, res) {
  // Todo route implementation
  res.send("Todo creation not yet implemented");
});

app.get("/todos", function (req, res) {
  // Get todos implementation
  res.send("Todos retrieval not yet implemented");
});

app.listen(3000, () => console.log("Server running on port 3000"));
