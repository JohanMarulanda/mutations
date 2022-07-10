const { Schema, model } = require('mongoose');

const Mutation = Schema({
    type:            {type: Number, require:[true, "type es Obligatorio"]},
    dna:             {type: String, require:[true, "La cadena de dna es Obligatoria"]},
})

module.exports = model('mutations', Mutation);