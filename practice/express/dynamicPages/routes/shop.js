const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('shop.js', adminData.products);
  res.render(path.join(rootDir, 'views', 'pages', 'shop.ejs'), {products: adminData.products, active:"shop"});
});

module.exports = router;
