'use strict'
require("dotenv").config()

const express = require('express');

const port = process.env.PORT || 3000;
const host = process.env.HOST;

const app = express();

require('./server/db/mongoose');
require("./server")(app);

app.listen(port, () => {
  console.log(`Running on http://${host}:${port}`);
});