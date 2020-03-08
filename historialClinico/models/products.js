const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema

const productSchema = new Schema({
    hospital: String,
    nombre_paciente: String,   
    direccion: String,
    cedula: { type : Number , unique : true, required : true, dropDups: true,trim:true },
    sexo:String,
    fecha_nacimiento:String,
    telefono_celular:{ type : Number , required : true, trim:true },
    servicio:String,
    pais:String,
    estado:String,
    avisarA:String,
    telefono_emergencia:String,
    motivo_admision:String,
    fecha_creacion:String

});


//create a new model

const Product = mongoose.model('product', productSchema);

//export de model
module.exports = Product;