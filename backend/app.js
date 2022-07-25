// importer express
const express = require("express");

const bodyParser = require("body-parser");
// importer mongoose
const mongoose = require("mongoose");

// importer les routers
const saucesRoutes = require("./routes/sauces");
const userRoutes = require("./routes/user");

const path = require('path');

// connection au server mongoose
mongoose
  .connect(
    "mongodb+srv://AD115:aUqqT2sMJ6QGsx4@cluster0.y06xs7s.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

// créer une application express
const app = express();

// autorisé l'utilisateur a se servir de notre Api
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

// pour cette route utiliser la route saucesRoutes
app.use("/api/sauces", saucesRoutes);
// pour cette route utiliser la route userRoutes
app.use("/api/auth", userRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));

// exporter const app pour y acceder depuis les autres fichiers
module.exports = app;
