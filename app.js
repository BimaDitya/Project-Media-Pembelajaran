const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// Use EJS Template Engine
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

app.get("/", function (req, res) {
  res.render("index", { nama: "Bima Aditya", title: 'Beranda' });
});

app.listen(port, function () {
  return "Web is Running";
});
