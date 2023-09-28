const Pet = require('../models/pets.model');

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then((pet) => {
            console.log("this is my pet", pet)
            res.json(pet)
        })
        .catch(err => {res.status(400).json(err), console.log(err)}
    );
}

module.exports.getAllPets = (req,res) => {
    Pet.find()
        .then((pets) => {
            console.log("All my pets", pets)
            res.json(pets)
        })
        .catch(err => res.json(err))
}

module.exports.getOnePet = (req,res) => {
    Pet.findOne({_id : req.params.id}) 
        .then(pet =>{ res.status(201).json(pet), console.log(res.statusCode)})
        .catch(err => {res.status(400).json(err), console.log(err)});
}

module.exports.updatePet = (req,res) => {
    Pet.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators: true})
        .then(pet =>{ res.status(201).json(pet), console.log(res.statusCode)}) 	 .catch(err => {res.status(400).json(err), console.log(err)});
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id:req.params.id})
        .then(deletedpet => res.json(deletedpet))
        .catch(err => res.json(err))
}