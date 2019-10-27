const express = require('express');
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')

const routes = express.Router();

routes.post('/users', SessionController.store);
routes.post('/spots', SpotController.store);

module.exports = routes;