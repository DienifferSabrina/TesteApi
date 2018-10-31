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
   try {

    const retorno = await usuarioRepository.get();

   } catch (error) {
       throw error;
   }
} 

async function getById(id){
    try {
        const retorno = await usuarioRepository.getById(id);
    } catch (error) {
        throw error;
    }
}

async function insert(usuario){
    try {
        const retorno = await usuarioRepository.insert(usuario);
        console.log(retorno);
        return retorno;
    } catch (error) {
        throw error;
    }
}

async function update(usuario){
    try {
        const retorno = await usuarioRepository.update(usuario);
    } catch (error) {
        throw error;
    }
}

async function exclude(id){
    try {
        const retorno = await usuarioRepository.exclude(id);
    } catch (error) {
        throw error;
    }
}
    
