const DiveAccessories = require('../controllers/dive_accessories.controller');

module.exports = app => {
    app.get('/api/accessory', DiveAccessories.getAllAccessories);
    app.post('/api/accessory', DiveAccessories.createAccessory);
}