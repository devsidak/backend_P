const express = require("express");
const path = require("path");
const router = express.Router();
const handleErr = require("../utils/logger");
const rootDir = require("../utils/path");
const getAbsPath = require("../utils/getAbsPath");
var products = require("./admin").products;

router.get("/", (req, res) => {
  const URL = req.originalUrl;
  res.sendFile(getAbsPath("views/shop.html"), (err) => {
    handleErr(err, URL);
    console.log("shop -", products);
  });
});

module.exports = router;
