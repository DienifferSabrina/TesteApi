const produtosRepository = require('./produtosRepository'),
error = require('../../configs/error');
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
    
