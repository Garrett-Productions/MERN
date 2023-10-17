const MockController = require('../controllers/mockBuild.controller');
module.exports = app => {

    app.get('/api/mock', MockController.getAllMock);
    app.post('/api/mock', MockController.createMock);
    app.get('/api/mock/:id', MockController.getOneMock);
}