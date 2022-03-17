const express=require('express');
const app=express();
const path = require('path');

//settings
app.set('port',3000);
app.set('views',path.join(__dirname,'views'));
//para que pueda procesar html como ejs
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');
//middlewares
//routes llama a index por defecto
app.use(require('./routes/index'));
//statics files
app.use(express.static(path.join(__dirname,'public')))
//escuchando el servidor

app.listen(app.get('port'),() =>{
    console.log('server on port', app.get('port'));
});
