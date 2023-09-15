const Pet = require('../models/pet_shelter.model');

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
        .catch(err => res.json(err)
    );
}

module.exports.getOnePet = (req,res) => {
    Pet.findOne({_id : req.params.id}) // the .id on the right side of our equal sign needs to match our :id, param, within our route
        .then(pet =>{ res.status(201).json(pet), console.log(res.statusCode)})
        .catch(err => {res.status(400).json(err), console.log(err)});
}

module.exports.updatePet = (req,res) => {
    Pet.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators: true}) // the req.body is what we update, the new:true is so we can pass new info back and it doesnt re render old info
        .then(pet =>{ res.status(201).json(pet), console.log(res.statusCode)}) // we didn't see the console.log upon the catch from update form so we needed to include runValidators: true
        .catch(err => {res.status(400).json(err), console.log(err)});
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id:req.params.id})
        .then(deletedpet => res.json(deletedpet))
        .catch(err => res.json(err))
}