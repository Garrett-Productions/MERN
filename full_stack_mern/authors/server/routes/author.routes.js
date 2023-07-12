const AuthorController = require('../controllers/author.controller');
// const authorModel = require('../models/author.model');
module.exports = app => {

    // app.get('/api', AuthorController.index);

    app.get('/api/authors', AuthorController.getAllAuthors);
    app.post('/api/authors', AuthorController.createAuthor);
    app.get('/api/authors/:id', AuthorController.getOneAuthor);
    app.patch('/api/authors/:id', AuthorController.updateAuthor);
}