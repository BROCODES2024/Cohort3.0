const express = require("express");
const { Usermodel, todomodel } = require("./db");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const JWT_SECRET = "CHETAN@REDDY@394";
// to use await name the function async
app.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  await Usermodel.insert({
    email: email,
    password: password,
    name: name,
  });
  res.json({
    message: "You are signed up",
  });
});

app.post("/sigin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const user = await Usermodel.findOne({
    email: email,
    password: password,
  });
  console.log(user);
  if (user) {
    const token = jwt.sign({
      id: user._id.toString(),
    });
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect Credentials",
    });
  }
});
app.post("/todo", function () {});
app.get("/todos", function () {});
app.listen(3000);
