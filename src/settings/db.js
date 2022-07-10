const mongoose = require('mongoose');

// conexion local mongoose.connect('mongodb://localhost/db_mutation', {
mongoose.connect(process.env.MONGODB_ADDON_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(data => console.log('DB is connected'))
    .then(err => console.error(err));

