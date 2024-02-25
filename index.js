/* server instance setup */
const express = require('express');
const app = express();
const host = 'localhost';
const port = 80;
const path = require('path');
app.listen(port, () => {
  console.log(`Server is now being hosted at: http://${host}:${port}`);
});

app.use(express.static(__dirname + '/public'));

/* routers */
const pagesRouter = require('./routes/pages.js');
app.use(pagesRouter);