const Mock = require('../models/mock.model');  

module.exports.createMock = (req,res) => {
    Mock.create(req.body)
        .then(mock =>{ res.status(201).json(mock), console.log(res.statusCode)})
        .catch(err => {res.status(400).json(err), console.log(err)});
}

module.exports.getAllMock = (req,res) => {
    Mock.find()
        .then(mocks => res.json(mocks))
        .catch(err => res.json(err))
}

module.exports.getOneMock = (req,res) => {
    Mock.findOne({_id : req.params.id}) // the .id on the right side of our equal sign needs to match our :id in param, within our route
        .then(mock =>{ res.status(201).json(mock), console.log(res.statusCode)})
        .catch(err => {res.status(400).json(err), console.log(err)});
}