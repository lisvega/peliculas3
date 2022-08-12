const ActrisRoutes = require('express').Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteActris } = require('./actris.controller');

ActrisRoutes.get('/', getAll)
ActrisRoutes.get('/:id', getById)
ActrisRoutes.post('/', create)
ActrisRoutes.patch('/:id', update)
ActrisRoutes.delete('/:id', deleteActris)

module.exports = ActrisRoutes