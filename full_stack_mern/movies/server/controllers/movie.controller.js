const Movie = require('../models/movie.model');

module.exports.createMovie = (req, res) => {
    Movie.create(req.body)
        .then((movie) => {
            console.log("this is my movie", movie)
            res.json(movie)
        })
        .catch(err => {res.status(400).json(err), console.log(err)}
    );
}

module.exports.getAllMovies = (req,res) => {
    Movie.find()
        .then((movies) => {
            console.log("All my movies", movies)
            res.json(movies)
        })
        .catch(err => res.json(err))
}

module.exports.getOneMovie = (req,res) => {
    Movie.findOne({_id : req.params.id}) 
        .then(movie =>{ res.status(201).json(movie), console.log(res.statusCode)})
        .catch(err => {res.status(400).json(err), console.log(err)});
}

module.exports.updateMovie = (req,res) => {
    Movie.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators: true})
        .then(movie =>{ res.status(201).json(movie), console.log(res.statusCode)}) 	 
        .catch(err => {res.status(400).json(err), console.log(err)});
}

module.exports.deleteMovie = (req, res) => {
    Movie.deleteOne({_id:req.params.id})
        .then(deletedmovie => res.json(deletedmovie))
        .catch(err => res.json(err))
}
