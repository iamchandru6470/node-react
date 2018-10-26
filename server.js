const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/test", (req, res) => {
  res.send("I am working ");
});
app.get("*", (req, res) => {
  // res.send(path.join(__dirname, "client/build", "index.html"));
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
