const express = require('express');
const router = express.Router();
//importamos el controlador
const proyectoController = require ('../controllers/proyectoController');
const usuariosController = require ('../controllers/usuariosController');
module.exports = function () {
    //ruta para eñ home
    // req= es la consulta que haces
    // res= es la respuesta del servidor
    router.get('/', proyectoController.proyectosHome);
    router.get('/nuevo-proyecto', proyectoController.formularioProyecto);

    //Crear cuenta
    router.get('/crear-cuenta',usuariosController.formCrearCuenta);

    //iniciar seseion
    router.get('/iniciar-sesion',usuariosController.formIniciarSesion);
    
    //reset Password
    router.get('/Reset-password',usuariosController.formResetPassword);
        return router;
}
