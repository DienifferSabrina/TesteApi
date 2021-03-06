const usuarioController = require('./usuarioController');

module.exports = [{
    verbo: 'get',
    rota: '/usuario/all/:page?',
    metodo: usuarioController.get,
    public: true
}, {
    verbo: 'get',
    rota: '/usuario/:id',
    metodo: usuarioController.getById,
    public: true
},  {
    verbo: 'post',
    rota: '/usuario/',
    metodo: usuarioController.insert,
    public: true
    
}, {
    verbo: 'put',
    rota: '/usuario/:id',
    metodo: usuarioController.update,
    public: true
}, {
    verbo: 'delete',
    rota: '/usuario/:id',
    metodo: usuarioController.exclude,
    public: true
}
];