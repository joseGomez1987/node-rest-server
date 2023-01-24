const { response } = require("express");
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require("../helpers/generar-jwt");


const login = async(req, res = response) => {

    const {correo, password} = req.body;

    try {

        //Verifificar si el correo existe
        const usuario = await Usuario.findOne({ correo });
        if ( !usuario ) {
            return res.status(400).json({
                msg: 'Usuario / Correo no son correctos - correo'
            })
        }
        //Autenticar si el usuario esta activo
        if ( !usuario.estado ) {
            return res.status(400).json({
                msg: 'Usuario / Correo inactivo - estado false'
            })
        }
        //Verificar la contraseña de usuario
        const validPassword = bcryptjs.compareSync( password, usuario.password );
        if(!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / Password incorrecto - clave'
            })
        }
        //Generar el JWT
        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: ('Algo salio mal. Hable con el administrador')
        })
    }

    
}

module.exports = {
    login
}