const database = require('./../../configs/database');

module.exports = {
    get,
    getById,
    insert,
    update,
    exclude
}

async function get() {
    
}

async function getById(id) {
    
}

async function insert(fornecedor) {

    return new Promise(function(resolve, reject){
        database.query(`INSERT INTO tb_fornecedor ()`,
        (error, results, fields) => {
            if(error) reject(error);
            resolve(results);
        });
    });
    
}

async function update(fornecedor) {
    
}

async function exclude(id) {
    
}