const loginController = require('./loginController');

module.exports = [{
    verbo: 'get',
    rota: '/login/:user/:password',
    metodo: loginController.login,
    public: true
}];