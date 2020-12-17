require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({​​​​​ extended: false }​​​​​))
// parse application/json
app.use(bodyParser.json())
 
app.get('/',function(req, res){​​
  res.send('<h1> armadno herrera palos</h1>');
}​​);


app.use(require('./routes/usuario'));
app.use(require('./routes/departamento'));
app.use(require('./routes/empleado'));

 mongoose.connect('mongodb+srv://admin1:pabema0524@cluster0.dfd4y.mongodb.net/compañia',{​​
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
 }​​,(err, res) => {​​
  if(err) throw err;
  console.log('Base de datos ONLINE');
}​​);

app.listen(process.env.PORT, ( )=> {​​
  console.log('La aplicacion esta en linea por el puerto', process.env.PORT)
}​​);