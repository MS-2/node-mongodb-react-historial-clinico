const Product = require('../models/products');
const Histori = require('../models/historias');
const LAB = require('../models/laboratorio');
var moment = require('moment');
moment.locale('es');
module.exports = {

    IndexHistorico: async (req,res,next) => {
        const historis = await Histori.find();
        res.status(200).json(historis);
    },
    //get all products
    indexProduct: async (req,res,next) => {
        const products = await Product.find();
        res.status(200).json(products);
    },

    deletePaciente: async(req,res,next)=>{
        var date = new moment();
        const paciente = req.body.id;
        console.log("PAC : "+paciente);
        const newHistoric = new Histori({
            hospital:"CLINICA PIAR", 
            nombre_paciente:"se elimino al paciente",
            cedula:paciente,
            status:"eliminado",
            fecha_creacion:date.format('MMMM Do YYYY, h:mm:ss a')
        })
        const historia = await newHistoric.save();
        await Product.findByIdAndDelete({_id:paciente});
        res.status(200);
    },

    getPaciente: async(req,res,next)=>{
        const id = req.params.id;
        console.log("UNIQUE : "+id);
        const unique =  await Product.findById({_id:id});
        res.status(200).json(unique);
    },

    // insert a new  product
    newProduct: async (req,res,next) => {
        var date = new moment();
        const hospital = req.body.hospital;
        const nombre_paciente = req.body.nombre_paciente;
        const direccion = req.body.direccion;
        const cedula = req.body.cedula;
        const sexo = req.body.sexo;
        const fecha_nacimiento = req.body.fecha_nacimiento;
        const telefono_celular = req.body.telefono_celular;
        const servicio = req.body.servicio;
        const pais = req.body.pais;
        const estado = req.body.estado;
        const avisarA = req.body.avisarA;
        const telefono_emergencia = req.body.telefono_emergencia;
        const motivo_admision = req.body.motivo_admision;
        const fecha_creacion = req.body.fecha_creacion;
        const newPaciente = new Product({
            hospital:hospital,
            nombre_paciente:nombre_paciente,
            direccion:direccion,
            cedula:cedula,
            sexo:sexo,
            fecha_nacimiento:fecha_nacimiento,
            telefono_celular:telefono_celular,
            servicio:servicio,
            pais:pais,
            estado:estado,
            avisarA:avisarA,
            telefono_emergencia:telefono_emergencia,
            motivo_admision:motivo_admision,
            fecha_creacion:fecha_creacion
        });
        const newHistoric = new Histori({
            hospital:hospital, 
            nombre_paciente:nombre_paciente,
            cedula:cedula, 
            fecha_creacion: date.format('MMMM Do YYYY, h:mm:ss a'),
            status: "creado"
        })
        const historia = await newHistoric.save();
        const pacient = await newPaciente.save();
        // console.table(historia);
        res.status(200).json(pacient);
    },

    updatePaciente: async(req,res,next)=>{
        var date = new moment();
        const id = req.params.id;
        const hospital = req.body.hospital;
        const nombre_paciente = req.body.nombre_paciente;
        const direccion = req.body.direccion;
        const cedula = req.body.cedula;
        const sexo = req.body.sexo;
        const fecha_nacimiento = req.body.fecha_nacimiento;
        const telefono_celular = req.body.telefono_celular;
        const servicio = req.body.servicio;
        const pais = req.body.pais;
        const estado = req.body.estado;
        const avisarA = req.body.avisarA;
        const telefono_emergencia = req.body.telefono_emergencia;
        const motivo_admision = req.body.motivo_admision;
        const fecha_creacion = req.body.fecha_creacion;   
        const newProduct = ({
            hospital:hospital,
            nombre_paciente:nombre_paciente,
            direccion:direccion,
            cedula:cedula,
            sexo:sexo,
            fecha_nacimiento:fecha_nacimiento,
            telefono_celular:telefono_celular,
            servicio:servicio,
            pais:pais,
            estado:estado,
            avisarA:avisarA,
            telefono_emergencia:telefono_emergencia,
            motivo_admision:motivo_admision,
            fecha_creacion:date.format('MMMM Do YYYY, h:mm:ss a')
        });
        const updatedPaciente = await Product.findByIdAndUpdate(id,newProduct);
        const newHistoric = new Histori({
            hospital:hospital, 
            nombre_paciente:"se modifico : "+nombre_paciente,
            cedula:cedula,
            fecha_creacion:date.format('MMMM Do YYYY, h:mm:ss a'),
        })
        const historia = await newHistoric.save();
        res.status(200).json({success : true});
    },

    newLab: async (req,res,next) => {
        const nombre = req.body.nombre;
        const nombre_medico = req.body.nombre_medico;
        const habitacion = req.body.habitacion;
        const codigo = req.body.codigo;
        const examenes = req.body.examenes;
        const fecha_creacion = req.body.fecha_creacion;
        const newLab = new LAB({
            nombre:nombre,
            nombre_medico:nombre_medico,
            habitacion:habitacion,
            codigo:codigo,
            examenes:examenes,
            fecha_creacion: fecha_creacion
        });
      
        const laboratorio = await newLab.save();
        // console.table(historia);
        res.status(200).json(laboratorio);
    },


}