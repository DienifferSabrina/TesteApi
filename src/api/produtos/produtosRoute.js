const produtosController = require('./produtosController');

module.exports = [{
    verbo: 'get',
    rota: '/produtos/',
    metodo: produtosController.get,
    public: true
}, {
    verbo: 'get',
    rota: '/produtos/:id',
    metodo: produtosController.getById,
    public: true
},{
    verbo: 'post',
    rota: '/produtos/',
    metodo: produtosController.insert,
    public: true
    
}, {
    verbo: 'put',
    rota: '/produtos/:id',
    metodo: produtosController.update,
    public: true
}, {
    verbo: 'delete',
    rota: '/produtos/:id',
    metodo: produtosController.exclude,
    public: true
}
];