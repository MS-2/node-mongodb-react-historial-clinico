const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema

const historiaSchema = new Schema({
    hospital: String,
    nombre_paciente: String,   
    cedula: String,
    status:String,
    pacienteid:String,
    fecha_creacion:String
});


//create a new model

const Histori = mongoose.model('histori', historiaSchema);

//export de model
module.exports = Histori;