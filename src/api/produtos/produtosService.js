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
    const data = await produtosRepository.get();
    return data;
} 

async function getById(id){
    const data = await produtosRepository.getById(id);
    return data;
}

async function insert(produtos){
    const data = await produtosRepository.insert(produtos);
    return data;
}

async function update(produtos, id){
    const data = await produtosRepository.update(produtos, id);
    return data;
}

async function exclude(id){
    const data = await produtosRepository.exclude(id);
    return data;
}
    
