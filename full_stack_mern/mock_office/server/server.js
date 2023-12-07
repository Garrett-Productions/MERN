const express = require('express');
const app = express();
const cors = require('cors')
const port = 8000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require config here
app.use(cors())
// require routes here

app.listen(port, ()=> console.log(`listening on port: ${port}`));