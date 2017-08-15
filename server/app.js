const express = require('express');
const cors = require('cors');
const series = require('./routes/series');

const app = express();

app.use(cors());

app.use('/series', series);

module.exports = app;
