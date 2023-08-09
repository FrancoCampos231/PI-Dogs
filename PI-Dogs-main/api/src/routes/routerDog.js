const { Router } = require('express');
const { getAllDogs, getDogId, createDogs } = require('../handlers/handlerDog')

const routerD = Router();

routerD.get('/', getAllDogs)
routerD.get('/:id', getDogId)
routerD.post('/' , createDogs)

module.exports = routerD;