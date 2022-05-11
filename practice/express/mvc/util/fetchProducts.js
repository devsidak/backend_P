const fs = require("fs");
const path = require("path");
const p = path.join(path.dirname(__dirname), "data", "products.json");


const fetchProducts = () => {
    return new Promise((resolve, reject) => {
      fs.readFile(p, (err, data) => {
        if (err) {
          resolve([]);
        }
        content = JSON.parse(data);
        console.log("C - ", content);
        resolve(content);
      });
    });
  };
  

  module.exports = fetchProducts ;