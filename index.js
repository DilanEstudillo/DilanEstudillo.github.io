const express = require('express');
const routes = require('./routes');
const path = require('path'); // libreria para views
const bodyParser = require('body-parser'); //para leer formularios libreria
//crear una app de express
const app = express();
// cargar los archivos Css y js
app.use(express.static('public'));
// habilitar Pug
app.set('view engine', 'pug');
//Añadir la carpeta vistas
app.set('views', path.join(__dirname, './views'));
//habilitar body parser para leer formularios
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routes());
// el puerto por el cual quiero que corra
app.listen(3000);