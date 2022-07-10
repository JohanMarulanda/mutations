const Mutation = require('../models/model_mutation');
const pool = require('../settings/db');

let listMutations = async (req, res) => {
    const model = await Mutation.find()
    const negativos = await Mutation.countDocuments({type: 0})
    const positivos = await Mutation.countDocuments({type: 1})
    console.log("ESTOS SON LOS POSTIIVOS ", positivos)
    console.log("ESTOS SON LOS negativos ", negativos)
    return res.json({
        'count_mutant_dna': positivos,
        'count_human_dna': negativos,
        'ratio': positivos/negativos
    })
};

module.exports = {
    listMutations
};