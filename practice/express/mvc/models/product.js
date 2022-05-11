const products_db = [];
const path = require("path");
const fs = require("fs");
const fetchProducts = require('../util/fetchProducts');
const p = path.join(path.dirname(__dirname), "data", "products.json");


//Class For handling products - Product Model;

class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    // console.log(this);
    // products_db.push(this);

    //Reading the existing products from the file to the array then adding the new product to the array and then writing the array to the file;

    fetchProducts().then((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log("err - ", err);
      });
    });
    // fs.readFile(p, (err, data) => {
    //   let content = [];

    //   if (data) {
    //     content = JSON.parse(data);
    //     console.log("rbefw-", content);
    //   }
    //   console.log("rw- ", content);

    //   //pushing new product to file content;
    //   content.push(this);

    //   //saving new product to file;
    //   fs.writeFile(p, JSON.stringify(content), (err) => {
    //     if (err) {
    //       console.log("W - ", err);
    //       return;
    //     }
    //   });
    // });
  }

  static fetchAll() {
    //reading file from products_db file and returning the array;
    // const p = path.join(path.dirname(__dirname), "data", "products.json");
    return fetchProducts();

    // return new Promise((resolve, reject) => {
    //   fs.readFile(p, (err, data) => {
    //     if (err) {
    //       resolve([]);
    //     }
    //     content = JSON.parse(data);
    //     console.log("C - ", content);
    //     resolve(content);
    //   });
    // });
  }

  // return products_db;
}
// static fetchAll() {
//   //reading file from products_db file and returning the array;
//   const p = path.join(path.dirname(__dirname), "data", "products.json");
//   let content = [];
//   return new Promise((resolve, reject) => {
//     fs.readFile(p, (err, data) => {
//       if (err) {
//         resolve([]);
//       }
//       if (data) {
//         content = JSON.parse(data);
//         console.log("C - ", content);
//       }
//       resolve(content);
//     });
//   });

//   // return products_db;
// }

module.exports = Product;
