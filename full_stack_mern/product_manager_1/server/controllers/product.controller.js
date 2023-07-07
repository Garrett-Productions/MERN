const Product = require('../models/product.model');  

module.exports.createProduct = (req,res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.getAllProducts = (req,res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

module.exports.getProduct = (req,res) => {
    Product.findOne({_id : req.params.id}) // the .id on the right side of our equal sign needs to match our :id, param, within our route
        .then(product => res.json(product))
        .catch(err => res.json(err))
}



// this below is for testing purposes before we added the database
// module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
//     response.json({     // This is where we're setting the API's response to the requesting client
//         message: "Hello World"
//     });
// }