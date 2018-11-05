const usuarioRepository = require('../usuario/usuarioRepository');
const msgs = require('../../configs/msg');
const error = require('../../configs/error');

module.exports = {
    login
}

async function login(user) {
    
    if(user.login && user.login.length == 0){
        error.mensagem = error.userMessage = msgs.loginNotFound;
        throw error;
    }

    if(user.senha && user.senha.length == 0){
        error.mensagem = error.userMessage = msgs.loginNotFound;
        throw error;
    }

    const usuario = await usuarioRepository.getByUser(user.login);
    console.log(usuario);
    return usuario;

}
