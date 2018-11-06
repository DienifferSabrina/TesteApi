const fornecedorService = require('./fornecedorService');

module.exports = {
    get,
    getAll,
    getById,
    insert,
    update,
    exclude
};

async function get() {
    return await fornecedorService.get();
}

async function getAll(req) {
    return await fornecedorService.getAll(req);
}

async function getById(req){
    return await fornecedorService.getById(req.params.id);
}

async function insert(req){
    return await fornecedorService.insert(req.body);
}

async function update(req){
    return await fornecedorService.update(req.body, req.params.id);
}

async function exclude(req){
    return await fornecedorService.exclude(req.params.id);
}
