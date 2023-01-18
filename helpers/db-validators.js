const Role = require('../models/role');
const Usuario = require('../models/usuario')


const esRoleValido = async(rol = '') => {

    const existeRol = await Role.findOne({ rol });
    if(!existeRol){
      throw new Error(`El rol ${ rol } no esta registrado en la Base de Datos`);
    }
}

const emailValidado = async(correo = '') => {

  const existeEmail = await Usuario.findOne({ correo });
    if(existeEmail){
        throw new Error(`El correo: ${correo}, ya esta registrado`)
    }
}

const existeUsuarioPorId = async(id) => {

  const existeusuario = await Usuario.findById(id);
    if(!existeusuario){
        throw new Error(`El id no existe: ${id}, verifique nuevamente`)
    }
}



module.exports = {
    esRoleValido,
    emailValidado,
    existeUsuarioPorId
}

