const loginService = require("./loginService");

module.exports = {
    login
}

async function login(req) {
    let user = {
        login: req.params.user,
        senha: req.params.password
    }

    return await loginService.login(user);
}