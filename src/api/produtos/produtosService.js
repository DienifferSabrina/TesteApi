const produtosRepository = require('./produtosRepository'),
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

    const retorno = await produtosRepository.get();

   } catch (error) {
       throw error;
   }
} 

async function getById(id){
    try {
        const retorno = await produtosRepository.getById(id);
    } catch (error) {
        throw error;
    }
}

async function insert(produtos){
    try {
        const retorno = await produtosRepository.insert(produtos);
    } catch (error) {
        throw error;
    }
}

async function update(produtos){
    try {
        const retorno = await produtosRepository.update(produtos);
    } catch (error) {
        throw error;
    }
}

async function exclude(id){
    try {
        const retorno = await produtosRepository.exclude(id);
    } catch (error) {
        throw error;
    }
}
    
