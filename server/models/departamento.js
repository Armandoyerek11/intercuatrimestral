const mongoose = require('mongoose');



let Schema = mongoose.Schema;



let departamentoSchema = new Schema({
   
id_jefe_de_area:{
        type:Schema.Types.ObjectId,
        ref:'Empleado',
        require:true,
    },
    nombre:{
        type: String,
        require:[true,'el nomre es necesario']
    },
    numero_empleados:{
        type: Number,
        require:true
    },
    extencion_telefonica:{
        type:Number,
        unique:true
    },
   activo:{
       type: Boolean,
       default:true
   }

});



module.exports = mongoose.model('Departamento', departamentoSchema);