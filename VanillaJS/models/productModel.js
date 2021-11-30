let products = require("../data/products");
const users = require("../data/users.json");
const { debugCode, writeDataToFile } = require("../utils");

function createUser(name) {
  return new Promise((resolve, reject) => {
    users.push(name);    
    writeDataToFile("./data/users.json", users);
  });
}

function findAll() {
  if (debugCode) console.log("model: findAll");
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findBySKU(sku) {
  if (debugCode) console.log("model: findBySKU req.params.sku = " + sku);
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.sku == sku);
    resolve(product);
  });
}

function create(product) {
  return new Promise((resolve, reject) => {
    // ... splits the product object (reomves {} from {field: value, field: value})
    const newProduct = { ...product };
    products.push(newProduct);
    if (process.env.NODE_ENV != "test") {
      writeDataToFile("./data/products.json", products);
    }
    resolve(newProduct);
  });
}

module.exports = {
  createUser,
  findAll,
  findBySKU,
  create,
};
