const mongoose = require('mongoose');
const { DBError } = require('../errors/DBError')


const dbInit = async () => {

    const DB_URI = `${process.env.MONGO_URL}`;

    mongoose.connect(DB_URI,
        {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err) => {
            if(err) return err;
            console.log('-- CONEXION EXITOSA A LA BD--');
        }
    );
}

module.exports = {dbInit};


