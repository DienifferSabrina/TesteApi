const loginController = require('./loginController');

module.exports = [{
    verbo: 'post',
    rota: '/login/',
    metodo: loginController.login,
    public: true
}];