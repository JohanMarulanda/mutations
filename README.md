# DNA PROJECT
Proyecto desarrollado en Node.js que detecta si un humano es mutante basándose en su secuencia de ADN

Se tiene como entrada un array de strings que representan cada fila de una tabla de (NxN) con la secuencia del ADN.
Las letras de los strings solo pueden ser: (A,T,C,G)

Se sabrá si un humano es mutante, si se encuentra más de una secuencia de cuatro letras iguales, de forma oblicua, horizontal o vertical.

## INSTALACIÓN
El proyecto se encuentra en el repositorio (https://github.com/JohanMarulanda/mutations), lo puedes clonar con git clone

## INSTRUCCCIONES DE COMO EJECUTAR LA API
Se tienen 2 APIs, que son las que se describen a continuación:
- El servicio "/mutant/", en donde se puede detectar su un humano es mutante o no enviandole la secuencia de ADN mediante un POST 
    POST → /mutant/
    {
        “dna”:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
    }
  En caso positivo retorna un HTTP 200, en caso contrario un 403 Forbidden

- El servicio  "/stats", el cual retorna los ADN's veificados, y retorna un JSON con las estadisticas de las verificaciones de AND el cual tiene el siguiente formato: {“count_mutant_dna”:40, “count_human_dna”:100: “ratio”:0.4}

Las APIS mencionadas anteriormente se encuentran alojadas en [Heroku](https://www.heroku.com) en (https://app-mutation-meli.herokuapp.com/api/mutation) y (https://app-mutation-meli.herokuapp.com/api/stats) respectivamente.

## TEST
Se usó [Jest](https://jestjs.io/) para testear el proyecto.

La carpeta está ubicada en **\_\_tests\_\_/**

**Para ejecutar**
```
$ npm test
```

**Output**
```
--------------------|---------|----------|---------|---------|-------------------
File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------|---------|----------|---------|---------|-------------------
All files           |   95.23 |    95.23 |     100 |      95 | 
 models             |     100 |      100 |     100 |     100 | 
  model_mutation.js |     100 |      100 |     100 |     100 | 
 services           |   97.05 |    97.22 |     100 |   96.87 | 
  isMutant.js       |   97.05 |    97.22 |     100 |   96.87 | 13
 utils              |      80 |    83.33 |     100 |      80 | 
  validChar.js      |      80 |    83.33 |     100 |      80 | 6
--------------------|---------|----------|---------|---------|-------------------

Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        1.832 s, estimated 3 s
```

**Coverage report**
Después de ejecutar las pruebas, se crea una carpeta llamada __coverage/__, este es un informe HTML del código de cobertura, por lo que podemos visualizar la información de cobertura, puede usar cualquier servidor de HTML para mostrar este informe por ejemplo usando *http-server*:


## EJECUCIÓN DEL PROGRAMA
Para ejecutar el script:
```
$ npm start
```

Si se desea cambiar la base de datos debe ingresar a _src/settings/db.js_ y cambiar la configuración actual.