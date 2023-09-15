const PetShelterController = require('../controllers/pet_shelter.controller');

module.exports = (app) => {
    app.post('/api/pet', PetShelterController.createPet)
    app.get('/api/pet', PetShelterController.getAllPets);
    app.get('/api/pet/:id', PetShelterController.getOnePet);
    app.patch('/api/pet/:id', PetShelterController.updatePet);
    app.delete('/api/pet/:id', PetShelterController.deletePet);
};