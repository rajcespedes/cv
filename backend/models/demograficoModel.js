const mongoose = require('mongoose');

const demograficoModel = new mongoose.Schema ( 
    {
    nombres: String,
    apellidos: String,
    ocupacion: String,
    barrio: String,
    celular: String,
    telefono: String,
    email: String,
    licencia: String
    }
);

module.exports = mongoose.model('Demografico',demograficoModel);