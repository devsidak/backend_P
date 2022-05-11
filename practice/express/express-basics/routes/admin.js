const express = require("express");
const path = require("path");
const getAbsPath = require("../utils/getAbsPath");
var products = [];

const router = express.Router();
const handleErr = require("../utils/logger");
const rootDir = require("../utils/path");

router.post("/add-product", (req, res, next) => {
  console.log("\n", "submitted - ", req.body);
  products.push({...req.body})
  res.redirect("/");
});

router.get("/add-product", (req, res, next) => {
  const URL = req.originalUrl;
  // console.log("my middleware !");
  res.sendFile(path.join(getAbsPath("views/add-product.html")), (err) =>
    handleErr(err, URL)
  );
});

exports.routes = router;
exports.products = products;