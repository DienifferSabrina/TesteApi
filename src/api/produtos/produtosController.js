const produtosService = require('./produtosService');

module.exports = {
    get,
    getById,
    insert,
    update,
    exclude
};

async function get(req) {
    return await produtosService.get(req);
}

async function getById(req){
    return await produtosService.getById(req.params.id);
}

async function insert(req){
    return await produtosService.insert(req.body);
}

async function update(req){
    return await produtosService.update(req.body, req.params.id);
}

async function exclude(req){
    return await produtosService.exclude(req.params.id);
}



