const express = require('express');
const bodyParser = require('body-parser')
const mutation = require('../controller/route_mutation');
const isMutant = require('../services/isMutant');

const app = express.Router();

const jsonParser = bodyParser.json()

app.post('/mutation', jsonParser, async function(req, res) {
    const dna = req.body.dna
    console.log("ESTE ES EL DNA OBTENIDO: ", dna)
    try {
      const mutacion = await isMutant(dna)
      if (mutacion == true) {
        console.log("ENTRE AL CASO POSITIVO")
        res.status(200).end()
      } else {
        console.log("ENTRE AL CASO NEGATIVO")
        res.status(403).end()
      }
    } catch(err) {
      console.log("ENTRE A LA EXCEPCION")
      res.status(403).send({error: err.message})
    }
  })

  app.get('/stats', mutation.listMutations);

module.exports = app;