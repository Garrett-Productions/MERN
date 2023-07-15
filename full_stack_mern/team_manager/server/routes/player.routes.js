const PlayerController = require('../controllers/player.controller');

module.exports = (app) => {
    app.post('/api/players', PlayerController.createPlayer)
    app.get('/api/players', PlayerController.getAllPlayers);
    app.get('/api/players/:id', PlayerController.getOnePlayer);
    app.patch('/api/players/:id', PlayerController.updatePlayer);
    app.delete('/api/players/:id', PlayerController.deletePlayer);
};