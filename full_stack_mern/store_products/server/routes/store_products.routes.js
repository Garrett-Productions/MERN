const Store_products_controller = require('../controllers/store_products.controller');
module.exports = app => {

    app.get('/api/store_products', Store_products_controller.getAllProducts);
    app.post('/api/store_product', Store_products_controller.createProduct);
    app.get('/api/store_products/:id', Store_products_controller.getOneProduct);
    app.patch('/api/store_products/:id', Store_products_controller.updateProduct);
    app.delete("/api/store_products/:id", Store_products_controller.deleteProduct);
}