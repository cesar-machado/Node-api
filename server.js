const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("requiredir")



//iniciando app
const app = express();

//Iniciando DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true
});
requireDir("./src/models");

const Product = mongoose.model("Product");

//Rotas
app.use("/api", require("./src/routes"));

app.listen(3001, () => console.log(`listening on http://localhost:${3001}`));
