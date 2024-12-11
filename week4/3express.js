const express = require("express"); //getting the express on local machine
const app = express(); //mandatory its like creating room for doctor so that patients can visit
function sum(n) {
  n = Number(n); // Convert string to number
  return (n * (n + 1)) / 2;
}

app.get("/", function (req, res) {
  const n = req.query.n;
  const ans = sum(n);
  res.send(`hi there your sum is ${ans}`);
});
app.listen(3000); //its now running and listens to changes occured and responds accordingly
