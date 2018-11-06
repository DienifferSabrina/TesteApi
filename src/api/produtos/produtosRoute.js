const produtosController = require('./produtosController');

module.exports = [{
    verbo: 'get',
    rota: '/produtos/all/:page?',
    metodo: produtosController.get,
    public: true
}, {
    verbo: 'get',
    rota: '/produto/:id',
    metodo: produtosController.getById,
    public: true
},{
    verbo: 'post',
    rota: '/produto/',
    metodo: produtosController.insert,
    public: true
    
}, {
    verbo: 'put',
    rota: '/produto/:id',
    metodo: produtosController.update,
    public: true
}, {
    verbo: 'delete',
    rota: '/produto/:id',
    metodo: produtosController.exclude,
    public: true
}
];