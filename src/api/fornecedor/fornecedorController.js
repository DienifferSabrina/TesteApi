const fornecedorService = require('./fornecedorService');

module.exports = {
    get,
    getById,
    insert,
    update,
    exclude
};

async function get() {
    return await fornecedorService.get();
}

async function getById(req){
    return await fornecedorService.getById(req.params.id);
}

async function insert(req){
    return await fornecedorService.insert(req.body.fornecedor);
}

async function update(req){
    return await fornecedorService.update(req.body.usuario);
}

async function exclude(req){
    return await fornecedorService.exclude(req.params.id);
}
