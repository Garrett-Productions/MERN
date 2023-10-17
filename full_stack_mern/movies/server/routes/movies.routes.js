const MovieController = require('../controllers/movie.controller');

module.exports = (app) => {
    app.post('/api/movie', MovieController.createMovie)
    app.get('/api/movies', MovieController.getAllMovies);
    app.get('/api/movie/:id', MovieController.getOneMovie);
    app.patch('/api/movie/:id', MovieController.updateMovie);
    app.delete('/api/movie/:id', MovieController.deleteMovie);
};