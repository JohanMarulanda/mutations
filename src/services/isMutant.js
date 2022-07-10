const validChar = require('../utils/validChar');
const Mutation = require('../models/model_mutation');

let isMutant = async (dna) => {
    let contador = 0;
    const rows = dna.length;
    console.log("ESTE ES EL DNA QUE RECIBO: ", dna)

    for(let i = 0; i<rows; i++){
        for(let j = 0; j<dna[i].length; j++){
            //Validacion caracter
            if(!validChar(dna[i].charAt(j))){
                throw new Error('Hay un caracter invalido, solo se permiten los siguientes caracteres: A, T, C, G')
            }

            //Validacion Horizontal
            if(j < dna[i].length - 3){
                if(dna[i].charAt(j) == dna[i].charAt(j+1) && dna[i].charAt(j) == dna[i].charAt(j+2) && dna[i].charAt(j) == dna[i].charAt(j+3)){
                    contador++;
                }
            }


            //Validacion vertical
            if(i < dna.length - 3){
                if(dna[i].charAt(j) == dna[i+1].charAt(j) && dna[i].charAt(j) == dna[i+2].charAt(j) && dna[i].charAt(j) == dna[i+3].charAt(j)){
                    contador++;
                }
            }


            //Validacion Diagonal Normal
            if(i < dna.length - 3 && j < dna[i].length - 3){
                if(dna[i].charAt(j) == dna[i+1].charAt(j+1) && dna[i].charAt(j) == dna[i+2].charAt(j+2) && dna[i].charAt(j) == dna[i+3].charAt(j+3)){
                    contador++;
                }
            }


            //Validacion Diagonal Invertida
            if(i >= 3 && j < dna[i].length - 3){
                if(dna[i].charAt(j) == dna[i-1].charAt(j+1) && dna[i].charAt(j) == dna[i-2].charAt(j+2) && dna[i].charAt(j) == dna[i-3].charAt(j+3)){
                    contador++;
                }
            }

            if(contador > 1){
                console.log("ESTO ES UN CASO POSITIVO, MI CONTADOR ES: ", contador)
                const mutacion = await new Mutation({ type: 1, dna: dna.toString() });
                mutacion.save()
                return true;
            }
        }
    }
    console.log("ESTO ES UN CASO negativo, MI CONTADOR ES: ", contador)
    const mutacion = await new Mutation({ type: 0, dna: dna.toString() });
    mutacion.save()
    return false;

}

module.exports = isMutant