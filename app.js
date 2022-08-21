const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const router = express.Router();
const { dbInit } = require('./db/mongo.connection')
const controller = require('./controllers/UsersController');
const app = express();
dotenv.config();

//Midlewares
app.use(express.json());
app.use(express.text());
// app.use(express.cors());

//Routes
app.use(require('./routes/UsersRoute'));
app.use((req, res)=>{
    res.status(404).json({msg: 'Error: pagina no encontrada'});
});

//Conecta a la BD e inicia el servidor para que el servidor no inicie sin antes conectarse a la BD
const arranqueApp = async () => {

    try{
       dbInit(); 
       
       app.listen(3000, () => {
            console.log(`Servidor corriendo en el puerto ${process.env.PORT}`); 
       });

    }catch(err){
        console.log(err.message);
        res.status(err.status).json(err.message)
    }
}


arranqueApp();