const BoilerController = require('../controllers/boiler.controller');  
module.exports = (app) => {
    app.get('/api', BoilerController.index);
    app.post('/api/example', BoilerController.createExample);
}