const Note = require('../models/note.model');

module.exports.createNote = (req, res) => {
    Note.create(req.body)
    .then(note =>{ res.status(201).json(note), console.log(res.statusCode)})
    .catch(err => {res.status(400).json(err), console.log(err)});
}
module.exports.getAllNotes = (req,res) => {
    Note.find()
        .then((notes) => {
            console.log("All my notes", notes)
            res.json(notes)
        })
        .catch(err => res.json(err))
}

module.exports.getOneNote = (req,res) => {
    Note.findOne({_id : req.params.id}) 
        .then(note =>{ res.status(201).json(note), console.log(res.statusCode)})
        .catch(err => {res.status(400).json(err), console.log(err)});
}

module.exports.updateNote = (req,res) => {
    Note.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators: true})
        .then(note =>{ res.status(201).json(note), console.log(res.statusCode)}) 	 
        .catch(err => {res.status(400).json(err), console.log(err)});
}

module.exports.deleteNote = (req, res) => {
    Note.deleteOne({_id:req.params.id})
        .then(deletedNote => res.json(deletedNote))
        .catch(err => res.json(err))
}
