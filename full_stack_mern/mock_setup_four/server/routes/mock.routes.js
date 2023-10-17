const MockController = require('../controllers/mock.controller');  

module.exports = (app) => {
    app.post('/api/mock', MockController.createMock);
    app.get('/api/mock', MockController.getAllMock);
    app.get('/api/mock/:id', MockController.getOneMock);
}