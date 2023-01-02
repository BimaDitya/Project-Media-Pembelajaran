const express = require("express");
const app = express();
const port = 3000;

// Use EJS Template Engine
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.render("index", { title: 'Beranda' });
});
app.get("/material", function (req, res) {
  res.render("material", { title: 'Latihan' });
});
app.get("/about", function (req, res) {
  res.render("about", { title: 'Tentang' });
});

app.listen(port, function () {
  return `Web is Running 127.0.0.1:${port}`;
});
