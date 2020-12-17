const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//let Schema = mongoose.Schema;
let Schema = mongoose.Schema;


    let empleadoSchema = new Schema({
        id_usuarios:{
            type:Schema.Types.ObjectId,
            ref: 'Usuario',
            require:true,
        },
        id_departamento :{
            type:Schema.Types.ObjectId,
            ref:'Departamento',
            require:true,
        },
        nombre_del_puesto:{
            type: String,
            require: [true,'el nombre es necesario'],
            unique: true
        },
         anios_servicio:{
             type: Number,
             require: [true, 'este campo es necesario'],
         },
         hora_entrada:{
             type: Number,
             require: [true, 'lahora es necesaria'],
         },
         hora_salida:{
             type:Number,
             require: [true,'la hora es necesaria'],
         },
         activo:{
             type: Boolean,
             default:true
         }
    
    });


module.exports = mongoose.model('Empleado', empleadoSchema);
