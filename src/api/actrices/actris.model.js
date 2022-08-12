
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    imagen: { type: String, required: true },
    nombre: { type: String, unique: true, required: true },
    edad: { type: Number, required: true },

},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('actrices', schema);