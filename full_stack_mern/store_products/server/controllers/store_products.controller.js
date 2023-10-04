const Store_products = require('../models/store_products.model')

module.exports.createProduct = (req,res) => {
    Store_products.create(req.body)
        .then(product =>{ res.status(201).json(product), console.log(res.statusCode)})
        .catch(err => {res.status(400).json(err), console.log(err)});
}

module.exports.getAllProducts = (req,res) => {
    Store_products.find()
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

module.exports.getOneProduct = (req,res) => {
    Store_products.findOne({_id : req.params.id}) // the .id on the right side of our equal sign needs to match our :id, param, within our route
        .then(product =>{ res.status(201).json(product), console.log(res.statusCode)})
        .catch(err => {res.status(400).json(err), console.log(err)});
}

module.exports.updateProduct = (req,res) => {
    Store_products.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators: true}) // the req.body is what we update, the new:true is so we can pass new info back and it doesnt re render old info
        .then(product =>{ res.status(201).json(product), console.log(res.statusCode)}) // we didn't see the console.log upon the catch from update form so we needed to include runValidators: true
        .catch(err => {res.status(400).json(err), console.log(err)});
}

module.exports.deleteProduct = (req, res) => {
    Store_products.deleteOne({_id:req.params.id})
        .then(deletedProduct => res.json(deletedProduct))
        .catch(err => res.json(err))
}
