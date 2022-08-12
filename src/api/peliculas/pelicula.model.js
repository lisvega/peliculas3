const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nombre: { type: String, unique: true, required: true },
    imagen: { type: String, required: true },
    director: { type: String, required: true },
    actores: [{ type: String, required: true }],
    actrices: [{ type: String, required: true }],
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('peliculas', schema);