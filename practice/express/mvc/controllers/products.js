const products = [];
const Product = require("../models/product");
exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  // products.push({ title: req.body.title });
  let prods = new Product(req.body.title);
  prods.save();
  // prod.save()
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then((prods) => {
      console.log("p - ", prods);
      res.render("shop", {
        prods,
        pageTitle: "Shop",
        path: "/",
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true,
      });
    })
    .catch((err) => console.log(err.message));

  // let prods = Product.fetchAll()
  // console.log("prods - ", prods.length)
  // res.render("shop", {
  //   prods,
  //   pageTitle: "Shop",
  //   path: "/",
  //   hasProducts: products.length > 0,
  //   activeShop: true,
  //   productCSS: true,
  // });
};
