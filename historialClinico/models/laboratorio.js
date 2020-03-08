const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema

const labSchema = new Schema({
    nombre: String,
    nombre_medico: String,   
    habitacion: String,
    codigo:String,
    fecha_creacion:String,
    examenes: []
});


//create a new model

const LAB = mongoose.model('laboratory', labSchema);

//export de model
module.exports = LAB;