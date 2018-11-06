const produtosRepository = require('./produtosRepository');
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
    const data = await produtosRepository.get(limits);
    const dataCount = await produtosRepository.count();
    return utils.responseHelpers(data, dataCount, req.params.page);
} 

async function getById(id){
    const data = await produtosRepository.getById(id);
    return data;
}

async function insert(produto){
    const data = await produtosRepository.insert(produto);
    return data;
}

async function update(produto, id){
    const data = await produtosRepository.update(produto, id);
    return data;
}

async function exclude(id){
    const data = await produtosRepository.exclude(id);
    return data;
}
    
