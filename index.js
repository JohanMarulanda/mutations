require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express()

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'public'));

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

//Routes
//Esta es la ruta inicial /api
app.use('/api',require('./src/routes/app'));

//Public
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'))
});