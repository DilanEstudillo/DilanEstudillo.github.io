exports.formCrearCuenta = (req,res) => {
    res.render('crearCuenta',{
        nombrePagina : 'Crear cuenta en Wolleken Inc'
    })
}

exports.formIniciarSesion = (req,res) => {
    res.render('iniciarSesion',{
        nombrePagina : 'Inicia Sesion en Wolleken Inc'
    })
}

exports.formResetPassword =(req,res) => {
    res.render('ResetPassword',{
        nombrePagina: 'Reset your Password'
    })
}


