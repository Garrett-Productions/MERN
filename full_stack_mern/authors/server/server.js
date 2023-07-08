const express = require('express');
const app = express();
const port = 8000;

require('/routes/author.routes'(app);

app.listen(port, () => console.log(`listening on port: ${port}`));
