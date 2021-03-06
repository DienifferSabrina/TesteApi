const usuarioService = require('./usuarioService');

module.exports = {
    get,
    getById,
    insert,
    update,
    exclude
};

async function get(req) {
    return await usuarioService.get(req);
}

async function getById(req){
    return await usuarioService.getById(req.params.id);
}

async function insert(req){
    return await usuarioService.insert(req.body);
}

async function update(req){
    return await usuarioService.update(req.body, req.params.id);
}

async function exclude(req){
    return await usuarioService.exclude(req.params.id);
}

