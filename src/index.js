const express= require('express');
const app =express();
const path = require('path');
//settings
app.set('port', 3000);
app.set('views', path.join(__dirname,'views'));

app.set('view engine', 'ejs');
//variable que me ayuda a leer archivos html
//app.engine('html', require('ejs').renderFile);
//middlewares

//Routes
app.use(require('./routes/index'));
//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));
//escuchando el servidor
app.listen(app.get('port'), () =>{
    console.log('Servidor en el puerto', app.get('port'));
});