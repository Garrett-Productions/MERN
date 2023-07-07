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

module.exports.updateProduct = (req,res) => {
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}) // the req.body is what we update, the new:true is so we can pass new info back and it doesnt re render old info
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => console.log(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id:req.params.id})
        .then(deletedProduct => res.json(deletedProduct))
        .catch(err => res.json(err))
}


// this below is for testing purposes before we added the database
// module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
//     response.json({     // This is where we're setting the API's response to the requesting client
//         message: "Hello World"
//     });
// }