const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let empleadoSchema = new Schema({​​
       id_usuario:{
       type:Schema.type.ObjectId,
       ref:'Usuario',
       require:true,
   },
   id_departametos:{
       type:Schema.type.ObjectId,
       ref:'Departamento',
       require:true,
   },
   nombre_del_puesto:{
    type:String,
    require:[true,'el nombre es nesesario'],
   },
   anios_servico:{
    type: Number,
    require:[true,'campo olbigatorio'],
},
hora_entrada:{
 type:Number,
 require:[true,'es nesesaria la hora de entrada'],
},
hora_salida:{
 type:Number,
 require:[true,'es neseraia la hora de salida'],
},
activo:{
 type:Boolean,
 default:true 
}
}​​);



module.exports = mongoose.model('Empleado', empreadoSchema);