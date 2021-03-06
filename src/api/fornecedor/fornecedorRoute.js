const fornecedorController = require('./fornecedorController');

module.exports = [{
    verbo: 'get',
    rota: '/fornecedor/',
    metodo: fornecedorController.get,
    public: true
},{
    verbo: 'get',
    rota: '/fornecedor/all/:page?',
    metodo: fornecedorController.getAll,
    public: true
}, {
    verbo: 'get',
    rota: '/fornecedor/:id',
    metodo: fornecedorController.getById,
    public: true
},{
    verbo: 'post',
    rota: '/fornecedor/',
    metodo: fornecedorController.insert,
    public: true
    
}, {
    verbo: 'put',
    rota: '/fornecedor/:id',
    metodo: fornecedorController.update,
    public: true
}, {
    verbo: 'delete',
    rota: '/fornecedor/:id',
    metodo: fornecedorController.exclude,
    public: true
}
];