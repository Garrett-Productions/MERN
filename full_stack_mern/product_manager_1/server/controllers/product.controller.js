const Product = require('../models/product.model');  

module.exports.createProduct = (req,res) => {
    Product.create(req.body)
    .then(product => res.json(product))
    .catch(err => res.json(err))
}
module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({     // This is where we're setting the API's response to the requesting client
        message: "Hello World"
    });
}