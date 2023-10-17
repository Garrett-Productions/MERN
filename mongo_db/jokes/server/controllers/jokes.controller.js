const Joke = require('../models/jokes.model')

module.exports.createNewJoke = (req,res) => {
    Joke.create(req.body)
    .then(newJoke => {
        res.json({joke: newJoke})
        console.log("this is my", newJoke)
    })
    .catch((err) => {
        res.json({ message: 'Algo esta equivocado con esta function', daError: err})
    })
}

module.exports.findAllJokes = (req,res) => {
    Joke.find()
    .then((allJokes) => {
        res.json({jokes: allJokes})
    })
    .catch((err) => {
        res.json({ message: 'Algo esta equivocado con esta function', daError: err})
    })
}

module.exports.findOneJoke = (req,res) => {
    Joke.findOne({_id: req.params.id})
    .then(oneJoke => {
        res.json({ joke: oneJoke})
    })
    .catch((err) => {
        res.json({ message: 'Algo esta equivocado con esta function', daError: err})
    })
}

module.exports.updateJoke = (req,res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, { new: true, runValidators: true})
    .then(updatedJoke => {
        res.json({ joke: updatedJoke})
    })
    .catch((err) => {
        res.json({ message: 'Algo esta equivocado con esta function', daError: err})
    })
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
    .then(resVar => {
        res.json({result:resVar})
    })
    .catch((err) => {
        res.json({ message: 'Algo esta equivocado con esta function', daError: err})
    })
}