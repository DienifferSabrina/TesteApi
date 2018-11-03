const database = require('./../../configs/database');

module.exports = {
    get,
    getById,
    insert,
    update,
    exclude
}

async function get() {
    return new Promise(function(resolve, reject){
        database.query(`select * from tb_fornecedor;`,
        (error, results, fields) => {
            if(error) reject(error);
            resolve(results);
        });
    }); 
}

async function getById(id) {
    return new Promise(function(resolve, reject){
        database.query(`select * from tb_fornecedor where id = ${id};`,
        (error, results, fields) => {
            if(error) reject(error);
            resolve(results);
        });
    });
}

async function insert(fornecedor) {
    return new Promise(function(resolve, reject){
        database.query(`INSERT INTO tb_fornecedor (nome, razaoSocial, cnpj, telefone, endereco, numero, bairro, cidade, estado)
                        VALUES('${fornecedor.nome}', '${fornecedor.razaoSocial}', '${fornecedor.cnpj}', '${fornecedor.telefone}',
                               '${fornecedor.endereco}', ${fornecedor.numero}, '${fornecedor.bairro}', '${fornecedor.cidade}', '${fornecedor.estado}')`,
        (error, results, fields) => {
            if(error) reject(error);
            resolve(results);
        });
    });  
}

async function update(fornecedor, id) {
    return new Promise(function(resolve, reject){
        database.query(`update tb_fornecedor 
                        set nome ='${fornecedor.nome}', razaoSocial ='${fornecedor.razaoSocial}', cnpj ='${fornecedor.cnpj}', telefone ='${fornecedor.telefone}',
                        endereco ='${fornecedor.endereco}', numero =${fornecedor.numero}, bairro ='${fornecedor.bairro}', cidade ='${fornecedor.cidade}', estado ='${fornecedor.estado}'
                        where id = ${id}`,
        (error, results, fields) => {
            if(error) reject(error);
            resolve(results);
        });
    });
}

async function exclude(id) {
    return new Promise(function(resolve, reject){
        database.query(`delete from tb_fornecedor where id = ${id};`,
        (error, results, fields) => {
            if(error) reject(error);
            resolve(results);
        });
    });
}
