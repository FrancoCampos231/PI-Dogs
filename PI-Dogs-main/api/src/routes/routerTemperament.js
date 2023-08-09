const { Router } = require('express');

const routerT = Router();

routerT.get('/', getAllTemperament);

module.exports = routerT;