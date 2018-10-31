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

async function insert(usuario) {
    console.log(usuario);
    return new Promise(function(resolve, reject){
        database.query(`INSERT INTO tb_usuario (nome, login, senha, email)
                        VALUES('${usuario.nome}', '${usuario.login}', '${usuario.senha}', '${usuario.email}')`,
        (error, results, fields) => {
            if(error) reject(error);
            console.log(fields);
            resolve(results);
        });
    }); 
}

async function update(usuario) {
    
}

async function exclude(id) {
    
}