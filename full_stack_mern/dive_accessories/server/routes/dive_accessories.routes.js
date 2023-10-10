const DiveAccessories = require('../controllers/author.controller');
module.exports = app => {

    app.get('/api/authors', DiveAccessories.getAllAccessories);
    app.post('/api/authors', DiveAccessories.createAccessory);
}