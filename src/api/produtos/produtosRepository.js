const database = require('./../../configs/database');

module.exports = {
    count,
    get,
    getById,
    insert,
    update,
    exclude
}
async function count() {
    return new Promise(function (resolve, reject) {
        database.query(`select count(*) as count from tb_produto`,
            (error, results, fields) => {
                if (error) reject(error);
                resolve(results);
            });
    });
}

async function get(limits) {
    return new Promise(function(resolve, reject){
        database.query(`select prod.id, prod.nome, prod.valor, prod.saldo, fo.nome as fornecedor 
                        from tb_produto prod
                        inner join tb_fornecedor fo on prod.id_fornecedor = fo.id
                        order by prod.id asc
                        limit ${limits[0]} OFFSET ${limits[1]}`,
        (error, results, fields) => {
            if(error) reject(error);
            resolve(results);
        });
    }); 
}

async function getById(id) {
    return new Promise(function(resolve, reject){
        database.query(`select * from tb_produto where id = ${id};`,
        (error, results, fields) => {
            if(error) reject(error);
            resolve(results);
        });
    });
}

async function insert(produtos) {
    return new Promise(function(resolve, reject){
        database.query(`INSERT INTO tb_produto (nome, valor, saldo, id_fornecedor)
                        VALUES('${produtos.nome}', ${produtos.valor}, ${produtos.saldo}, ${produtos.id_fornecedor})`,
        (error, results, fields) => {
            if(error) reject(error);
            resolve(results);
        });
    }); 
}

async function update(produtos, id) {
    return new Promise(function(resolve, reject){
        database.query(`update tb_produto 
                        set nome ='${produtos.nome}', valor =${produtos.valor}, saldo =${produtos.saldo}, id_fornecedor =${produtos.id_fornecedor}
                        where id = ${id}`,
        (error, results, fields) => {
            if(error) reject(error);
            resolve(results);
        });
    });
}

async function exclude(id) {
    return new Promise(function(resolve, reject){
        database.query(`delete from tb_produto where id = ${id};`,
        (error, results, fields) => {
            if(error) reject(error);
            resolve(results);
        });
    });
}