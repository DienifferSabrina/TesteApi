const usuarioService = require('./usuarioService');

module.exports = {
    get,
    getById,
    insert,
    update,
    exclude
};

async function get() {
    return await usuarioService.get();
}

async function getById(req){
    return await usuarioService.getById(req.params.id);
}

async function insert(req){
    return await usuarioService.insert(req.body.usuario);
}

async function update(req){
    return await usuarioService.update(req.body.usuario);
}

async function exclude(req){
    return await usuarioService.exclude(req.params.id);
}

