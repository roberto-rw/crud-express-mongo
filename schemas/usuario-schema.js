const mongoose = require('mongoose');


const userSchema = mongoose.Schema(
    {
        nombre: String,
        apellido: String,
        contrasenia: String,
        edad: Number
    },

    {
        versionKey: false 
    }
);

const userModel = mongoose.model("usuario", userSchema);

module.exports = {userModel};