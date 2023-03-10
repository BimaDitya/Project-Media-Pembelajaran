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
  const loadMaterialCard = () => {
    const fileBuffer = fs.readFileSync('data/materials.json', 'utf-8');
    const materialCard = JSON.parse(fileBuffer);
    return materialCard;
  };
  const materialCards = loadMaterialCard();
  res.render("material", { title: 'Materi', materialCards });
});
app.get("/about", function (req, res) {
  res.render("about", { title: 'Tentang' });
});

app.listen(port, function () {
  return `Web is Running 127.0.0.1:${port}`;
});
