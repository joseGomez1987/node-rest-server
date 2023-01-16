const{response, request, query} = require('express');


const usuariosGet = (req, res = response) => {

    const {q, nombre = 'No name', apikey, page = 1, limit} = req.query
    
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });    
}

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;
    
    res.json({
        msg: 'Post API - controlador',
        nombre, 
        edad
    });    
}

const usuariosPut = (req, res = response) => {

    const {id} = req.params;
    
    res.json({
        msg: 'Put API - controlador',
        id
    });    
}

const usuariosPatch = (req, res = response) => {
    
    res.json({
        msg: 'Patch API - controlador'
    });    
}

const usuariosDelete = (req, res = response) => {
    
    res.json({
        msg: 'Delete API - controlador'
    });    
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}