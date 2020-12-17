const mongoose = require('mongoose');
const { unique, union } = require('underscore');



let Schema = mongoose.Schema;



let usuarioSchema = new Schema({
    nombre:{
        type: String,
        require: [true, 'el nombre es nesesario']
    },
    primer_apellido:{
        type: String,
        require: [true, 'el apellido es necesario']
    },
    segundo_apellido:{
        type: String,
        require:[true, 'es nessario el apellido']
    },
    edad:{
        type: Number,
        require:[true,'la edad es necesaria']
    },
    curp:{
        type: String,
        unique: true,
    },
    telefono:{
        type: Number,
        unique: true,
        require:[true,'el telefono es ncesario']
    },
    mail:{
        type: String,
        unique:true,
        require:[true,'el correo es ncesario']
    },
    activo:{
        type:Boolean,
        default:true
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);