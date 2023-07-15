const Player = require('../models/player.model');

module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then((player) => {
            console.log("this is my player", player)
            res.json(player)
        })
        .catch(err => {res.status(400).json(err), console.log(err)});
}

module.exports.getAllPlayers = (req,res) => {
    Player.find()
        .then((players) => {
            console.log("All my players", players)
            res.json(players)
        })
        .catch(err => res.json(err))
}

module.exports.getOnePlayer = (req,res) => {
    Player.findOne({_id : req.params.id}) // the .id on the right side of our equal sign needs to match our :id, param, within our route
        .then(player =>{ res.status(201).json(player), console.log(res.statusCode)})
        .catch(err => {res.status(400).json(err), console.log(err)});
}

module.exports.updatePlayer = (req,res) => {
    Player.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators: true}) // the req.body is what we update, the new:true is so we can pass new info back and it doesnt re render old info
        .then(player =>{ res.status(201).json(player), console.log(res.statusCode)}) // we didn't see the console.log upon the catch from update form so we needed to include runValidators: true
        .catch(err => {res.status(400).json(err), console.log(err)});
}

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id:req.params.id})
        .then(deletedPlayer => res.json(deletedPlayer))
        .catch(err => res.json(err))
}