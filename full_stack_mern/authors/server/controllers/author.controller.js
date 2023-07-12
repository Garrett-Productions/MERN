const Author = require('../models/author.model');  

// module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
//     response.json({     // This is where we're setting the API's response to the requesting client
//         message: "Hello World"
//     });
// }

module.exports.createAuthor = (req,res) => {
    Author.create(req.body)
        .then(author =>{ res.status(201).json(author), console.log(res.statusCode)})
        .catch(err => {res.status(400).json(err), console.log(err)});
}
// by default every response will come back as a 200
// 201 is something we just created

module.exports.getAllAuthors = (req,res) => {
    Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.json(err))
}

module.exports.getOneAuthor = (req,res) => {
    Author.findOne({_id : req.params.id}) // the .id on the right side of our equal sign needs to match our :id, param, within our route
        .then(author =>{ res.status(201).json(author), console.log(res.statusCode)})
        .catch(err => {res.status(400).json(err), console.log(err)});
}

module.exports.updateAuthor = (req,res) => {
    Author.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators: true}) // the req.body is what we update, the new:true is so we can pass new info back and it doesnt re render old info
        .then(author =>{ res.status(201).json(author), console.log(res.statusCode)}) // we didn't see the console.log upon the catch from update form so we needed to include runValidators: true
        .catch(err => {res.status(400).json(err), console.log(err)});
}

// module.exports.deleteAuthor = (req, res) => {
//     Author.deleteOne({_id:req.params.id})
//         .then(deletedAuthor => res.json(deletedAuthor))
//         .catch(err => res.json(err))
// }
