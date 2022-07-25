// création des routes
const express = require("express");
const router = express.Router();


// importer le controller de user
const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
