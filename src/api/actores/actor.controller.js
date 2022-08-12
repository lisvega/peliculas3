const Actor = require('./actor.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const actores = await Actor.find();
        return res.json({
            status: 200,
            message: 'Recovered all actores',
            data: { actores: actores }
        });
    } catch (error) {
        return next(setError(500, 'Failed all codes'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const actor = await Actor.findById(id);
        if (!actor) return next(setError(404, 'Actor not found'))
        return res.json({
            status: 200,
            message: 'Recovered all actores',
            data: { actor: actor }
        });
    } catch (error) {
        return next(setError(500, 'Failed actor'))
    }
}

const create = async (req, res, next) => {
    try {
        const actor = new Actor(req.body)
        const actorInBd = await actor.save()
        return res.json({
            status: 201,
            message: 'Created new actor',
            data: { actor: actorInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created actor'))
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const actor = new Actor(req.body);
        actor._id = id;
        const updatedActor = await Actor.findByIdAndUpdate(id, actor)
        if (!updatedActor) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated actor',
            data: { actor: updatedActor }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated actor'));
    }
}

const deleteActor = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedActor = await Actor.findByIdAndDelete(id)
        if (!deletedActor) return next(setError(404, 'Actor not found'))
        return res.json({
            status: 200,
            message: 'deleted actor',
            data: { actor: deletedActor }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted actor'));
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteActor
}