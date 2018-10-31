const produtosService = require('./produtosService');

module.exports = {
    get,
    getById,
    insert,
    update,
    exclude
};

async function get() {
    return await produtosService.get();
}

async function getById(req){
    return await produtosService.getById(req.params.id);
}

async function insert(req){
    return await produtosService.insert(req.body.produtos);
}

async function update(req){
    return await produtosService.update(req.body.produtos);
}

async function exclude(req){
    return await produtosService.exclude(req.params.id);
}



