const PetController = require('../controllers/pets.controller');

module.exports = (app) => {
    app.post('/api/pet', PetController.createPet);
    app.get('/api/pets', PetController.getAllPets);
    app.get('/api/pets/:id', PetController.getOnePet);
    app.patch('/api/pets/:id', PetController.updatePet);
    app.delete('/api/pets/:id', PetController.deletePet);
};