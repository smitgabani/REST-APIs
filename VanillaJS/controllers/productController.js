const Product = require("../models/productModel");
const { debugCode, writeDataToFile, getPostData } = require("../utils");

// @desc    Welcomes a user
// @route   GET /api/products?username=name
async function welcome(req, res, name) {
  const works = Product.createUser(name);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: `Welcome ${name}!` }));
}

// @desc    Gets all products
// @route   GET /api/products
async function getProducts(req, res) {
  if (debugCode) console.log("controller: getProducts");
  try {
    const products = await Product.findAll();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.error(error);
  }
}

// @desc    Gets a single products
// @route   GET /api/products/:sku
async function getProduct(req, res, sku) {
  try {
    if (debugCode)
      console.log("controller: getProduct req.params.sku = " + sku);
    const product = await Product.findBySKU(sku);

    if (!product) {
      if (debugCode)
        console.log("controller: getProduct : Not found");
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product not found" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.error(error);
  }
}

// @desc    Gets a single product by name
// @route   GET /api/products?name=name
async function getProductbyName(req, res, name) {
  try {
    if (debugCode)
      console.log("controller: getProductbyName req.query.sku = " + name);
    const product = await Product.findProductByName(name);

    if (!product) {
      if (debugCode)
        console.log("controller: getProduct : Not found");
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product not found" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.error(error);
  }
}

// @desc    Create a single products
// @route   POST /api/products/:sku
async function createProduct(req, res) {
  try {
    const body = await getPostData(req);

    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product not found" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  welcome,
  getProduct,
  getProducts,
  createProduct,
  getProductbyName,
};
