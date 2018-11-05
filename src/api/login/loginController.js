const loginService = require("./loginService");

module.exports = {
    login
}

async function login(req) {
    let user = {
        login: req.body.login,
        senha: req.body.senha
    }

    return await loginService.login(user);
}