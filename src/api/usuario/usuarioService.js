const usuarioRepository = require('./usuarioRepository');
const error = require('../../configs/error');
const utils = require('../../configs/utils');

module.exports = {
    get,
    getById,
    insert,
    update,
    exclude
}

async function get(req) {
    const limits = utils.defineLimit(req.params.page);
    const data = await usuarioRepository.get(limits);
    const dataCount = await usuarioRepository.count();
    return utils.responseHelpers(data, dataCount, req.params.page); 
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
    
