const express = require("express");

const app = express();

app.listen(3000, () => console.log("Servidor rodando local na porta 3000"));

app.get("/", function (req, res) {
  res.send("<h1>Servidor rodando com ExpressJS</h1>");
});
