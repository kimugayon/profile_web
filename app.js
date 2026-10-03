const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.static("public")); 

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/school", (req, res) => {
  res.render("school");
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});