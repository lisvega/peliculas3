const Actris = require('./actris.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const actrices = await Actris.find();
        return res.json({
            status: 200,
            message: 'Recovered all actrices',
            data: { actrices: actrices }
        });
    } catch (error) {
        return next(setError(500, 'Failed all codes'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const actris = await Actris.findById(id);
        if (!actris) return next(setError(404, 'Actris not found'))
        return res.json({
            status: 200,
            message: 'Recovered all actrices',
            data: { actris: actris }
        });
    } catch (error) {
        return next(setError(500, 'Failed actris'))
    }
}

const create = async (req, res, next) => {
    try {
        const actris = new Actris(req.body)
        const actrisInBd = await actris.save()
        return res.json({
            status: 201,
            message: 'Created new actris',
            data: { actris: actrisInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created actris'))
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const actris = new Actris(req.body);
        actris._id = id;
        const updatedActris = await Actris.findByIdAndUpdate(id, actris)
        if (!updatedActris) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated actris',
            data: { actris: updatedActris }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated actris'));
    }
}

const deleteActris = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedActris = await Actris.findByIdAndDelete(id)
        if (!deletedActris) return next(setError(404, 'Actris not found'))
        return res.json({
            status: 200,
            message: 'deleted actris',
            data: { actris: deletedActris }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted actris'));
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteActris
}