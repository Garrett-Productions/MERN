const Example = require('../models/boiler.model');  


module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({     // This is where we're setting the API's response to the requesting client
        message: "Hello World"
    });
}

module.exports.createExample = (request, response) => {
    Example.create(request.body)
            .then(example => response.json(example))
            .catch(err => response.json(err));
    }