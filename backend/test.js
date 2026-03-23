const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("JS test working");
});

app.listen(5000, () => {
  console.log("JS server running on port 5000");
});