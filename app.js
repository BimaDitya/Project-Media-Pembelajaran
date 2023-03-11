const express = require("express");
const app = express();
const fs = require('fs');
const port = 3000;

// Use EJS Template Engine
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.render("index", { title: 'Beranda' });
});
app.get("/material", function (req, res) {
  const loadMaterialCardTitles = () => {
    const fileBuffer = fs.readFileSync('data/material-titles.json', 'utf-8');
    const materialCardTitles = JSON.parse(fileBuffer);
    return materialCardTitles;
  };
  const materialCardTitles = loadMaterialCardTitles();
  res.render("material", { title: 'Materi', materialCardTitles });
});
app.get("/material-detail", function (req, res) {
  res.render("material-detail", { title: 'Materi' });
});
app.get("/about", function (req, res) {
  res.render("about", { title: 'Tentang' });
});

app.listen(port, function () {
  return `Web is Running 127.0.0.1:${port}`;
});
