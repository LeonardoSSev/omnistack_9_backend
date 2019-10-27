const express = require('express') ;
const mongoose = require('mongoose');
const routes = require('./routes');

const { stringConnection } = require('../databaseConfig');

const app = express();

mongoose.connect(stringConnection,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());
app.use(routes);

app.listen(3333);