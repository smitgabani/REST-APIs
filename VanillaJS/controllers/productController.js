/**
 * @structure : product object
 * {
    "sku": 43900,
    "name": "Duracell - AAA Batteries (4-Pack)",
    "type": "HardGood",
    "price": 5.49,
    "upc": "041333424019",
    "category": [
      {
        "id": "pcmcat312300050015",
        "name": "Connected Home & Housewares"
      },
      {
        "id": "pcmcat248700050021",
        "name": "Housewares"
      },
      {
        "id": "pcmcat303600050001",
        "name": "Household Batteries"
      },
      {
        "id": "abcat0208002",
        "name": "Alkaline Batteries"
      }
    ],
    "shipping": 5.49,
    "description": "Compatible with select electronic devices; AAA size; DURALOCK Power Preserve technology; 4-pack",
    "manufacturer": "Duracell",
    "model": "MN2400B4Z",
    "url": "http://www.bestbuy.com/site/duracell-aaa-batteries-4-pack/43900.p?id=1051384074145&skuId=43900&cmp=RMXCC",
    "image": "http://img.bbystatic.com/BestBuy_US/images/products/4390/43900_sa.jpg"
  }
 */

const Product = require('../models/productModel')

const { debugCode, writeDataToFile, getPostData } = require('../utils')

// @desc    Gets all products
// @route   GET /api/products
async function getProducts(req, res) {
    console.log("controller: getProducts");
    try {
        const products = await Product.findAll();

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(products));
    } catch (error) {
        console.error(error);        
    }
}

// @desc    Gets a single products
// @route   GET /api/products/:sku
async function getProduct(req, res, sku) {
    try {
        if (debugCode) console.log("controller: getProduct req.params.sku = " + sku);
        const product = await Product.findBySKU(sku);
        
        if (!product) {
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({ message: "Product not found"}));
        } else {
            res.writeHead(200, {'Content-Type': 'application/json'});
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
        const product = await Product.findBySKU(sku);
        console.log("controller => " + sku);

        if (!product) {
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({ message: "Product not found"}));
        } else {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(product));
        }
        
    } catch (error) {
        console.error(error);        
    }
}

module.exports = {
    getProduct,
    getProducts,
    createProduct
}