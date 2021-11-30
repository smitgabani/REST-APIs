const http = require('http');
const env  = require('process');
const {getProducts, getProduct} = require('./controllers/productController');
const { debugCode } = require('./utils');

const PORT = process.env.PORT || 5151;

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Welcome to the api', goto: `http://localhost:${PORT}/api/products`},));

    } else if (req.url === '/api/products' && req.method === 'GET') {        
        if (debugCode) {console.log("GET /api/products")};        
        getProducts(req, res);

    } else if (req.url.match(/\/api\/products\/\w+/) && req.method === 'GET') {
        if (debugCode) {console.log("GET /api/products/:sku")};
        const sku = req.url.split('/')[3];
        getProduct(req, res, sku);

    } else if (req.url === '/api/products' && req.method === 'POST') {
        if (debugCode) {console.log("POST /api/products")};
        createProduct(req, res);
        
    } else {
        if (debugCode) {console.log("Unknown Route")};
        res.writeHead(404, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Route not found'}));
    }
})

server.listen(PORT, () => {console.log(`http://localhost:${PORT}/`)});

if (debugCode) {
    console.log("debugMode: "+ debugCode)
    console.log("The event loop handles microservices such that the promise places first is resolved last hence if you will see model log before the controller. log\nReverse order.")
};