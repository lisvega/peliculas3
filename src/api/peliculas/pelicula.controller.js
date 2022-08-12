const Pelicula = require('./pelicula.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const peliculas = await Pelicula.find();
        return res.json({
            status: 200,
            message: 'Recovered all peliculas',
            data: { peliculas: peliculas }
        });
    } catch (error) {
        return next(setError(500, 'Failed all codes'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const pelicula = await Pelicula.findById(id);
        if (!pelicula) return next(setError(404, 'Pelicula not found'))
        return res.json({
            status: 200,
            message: 'Recovered all peliculas',
            data: { pelicula: pelicula }
        });
    } catch (error) {
        return next(setError(500, 'Failed pelicula'))
    }
}

const create = async (req, res, next) => {
    try {
        const pelicula = new Pelicula(req.body)
        const peliculaInBd = await pelicula.save()
        return res.json({
            status: 201,
            message: 'Created new pelicula',
            data: { pelicula: peliculaInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created pelicula'))
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const pelicula = new Pelicula(req.body);
        pelicula._id = id;
        const updatedPelicula = await Pelicula.findByIdAndUpdate(id, pelicula)
        if (!updatedPelicula) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated pelicula',
            data: { pelicula: updatedPelicula }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated pelicula'));
    }
}

const deletePelicula = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedPelicula = await Pelicula.findByIdAndDelete(id)
        if (!deletedPelicula) return next(setError(404, 'Pelicula not found'))
        return res.json({
            status: 200,
            message: 'deleted pelicula',
            data: { pelicula: deletedPelicula }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted pelicula'));
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deletePelicula
}