const PeliculaRoutes = require('express').Router();
const {
    getAll,
    getById,
    create,
    update,
    deletePelicula } = require('./pelicula.controller');

PeliculaRoutes.get('/', getAll)
PeliculaRoutes.get('/:id', getById)
PeliculaRoutes.post('/', create)
PeliculaRoutes.patch('/:id', update)
PeliculaRoutes.delete('/:id', deletePelicula)

module.exports = PeliculaRoutes