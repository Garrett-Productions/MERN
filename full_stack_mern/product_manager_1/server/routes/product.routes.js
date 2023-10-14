const ProductController = require('../controllers/product.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getProduct);
    app.patch('/api/products/edit/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
}