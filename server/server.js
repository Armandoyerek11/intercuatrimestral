require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/',function(req,res){
  res.send('<h1>ayuda armadno </h1>');
});

app.use(require('./routes/usuario'));
app.use(require('./routes/departamento'));
app.use(require('./routes/empleado'));


mongoose.connect('mongodb+srv://admin:3312@cluster0.phebv.mongodb.net/intercuatrimestral',{
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useFindAndModify: false,
       useCreateIndex: true     
}, (err, res ) => {
  if (err) throw err; 
  console.log('Base de datos en linea');

});
app.listen(process.env.PORT, () => {
console.log('la aplicadcion esta en linea por el puerto ', process.env.PORT)
});