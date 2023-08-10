const { Router } = require('express');
const { getAllTemperament } = require('../handlers/handlerTemperament');

const routerT = Router();

routerT.get('/', getAllTemperament);

module.exports = routerT;