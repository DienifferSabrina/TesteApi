const usuarioRepository = require('./usuarioRepository'),
error = require('../../configs/error');

module.exports = {
    get,
    getById,
    insert,
    update,
    exclude
}

async function get() {
    const data = await usuarioRepository.get();
    return data;     
} 

async function getById(id){  
    const data = await usuarioRepository.getById(id);
    return data;    
}

async function insert(usuario){
    const data = await usuarioRepository.insert(usuario);
    return data;    
}

async function update(usuario, id){
    const data = await usuarioRepository.update(usuario, id);    
    return data;      
}

async function exclude(id){
    const data = await usuarioRepository.exclude(id);
    return data;    
}
    
