const DiveAccessories = require('../models/author.model');  

module.exports.createAccessory = (req,res) => {
    DiveAccessories.create(req.body)
        .then(accessories =>{ res.status(201).json(accessories), console.log(res.statusCode)})
        .catch(err => {res.status(400).json(err), console.log(err)});
}

module.exports.getAllAccessoriess = (req,res) => {
    DiveAccessories.find()
        .then(accessoriess => res.json(accessoriess))
        .catch(err => res.json(err))
}

// module.exports.getOneAuthor = (req,res) => {
//     Author.findOne({_id : req.params.id}) // the .id on the right side of our equal sign needs to match our :id in param, within our route
//         .then(author =>{ res.status(201).json(author), console.log(res.statusCode)})
//         .catch(err => {res.status(400).json(err), console.log(err)});
// }

// module.exports.updateAuthor = (req,res) => {
//     Author.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators: true}) // the req.body is what we update, the new:true is so we can pass new info back and it doesnt re render old info
//         .then(author =>{ res.status(201).json(author), console.log(res.statusCode)}) // we didn't see the console.log upon the catch from update form so we needed to include runValidators: true
//         .catch(err => {res.status(400).json(err), console.log(err)});
// }

// module.exports.deleteAuthor = (req, res) => {
//     Author.deleteOne({_id:req.params.id})
//         .then(deletedAuthor => res.json(deletedAuthor))
//         .catch(err => res.json(err))
// }
