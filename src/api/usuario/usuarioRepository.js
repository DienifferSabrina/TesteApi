const database = require('./../../configs/database');

module.exports = {
    count,
    get,
    getById,
    insert,
    update,
    exclude,
    getByUser
}

async function count() {
    return new Promise(function (resolve, reject) {
        database.query(`select count(*) as count from tb_usuario`,
            (error, results, fields) => {
                if (error) reject(error);
                resolve(results);
            });
    });
}

async function get(limits) {
    return new Promise(function(resolve, reject){
        database.query(`select * from tb_usuario
                        limit ${limits[0]} OFFSET ${limits[1]};`,
        (error, results, fields) => {
            if(error) reject(error);
            resolve(results);
        });
    }); 
}

async function getById(id) {
    return new Promise(function(resolve, reject){
        database.query(`select * from tb_usuario where id = ${id};`,
        (error, results, fields) => {
            if(error) reject(error);
            resolve(results);
        });
    }); 
}

async function getByUser(user) {
    return new Promise(function(resolve, reject){
        database.query(`select * from tb_usuario where login = '${user}';`,
        (error, results, fields) => {
            if(error) reject(error);
            resolve(results);
        });
    });  
}

async function insert(usuario) {

    return new Promise(function(resolve, reject){
        database.query(`INSERT INTO tb_usuario (nome, login, senha, email)
                        VALUES('${usuario.nome}', '${usuario.login}', '${usuario.senha}', '${usuario.email}')`,
        (error, results, fields) => {
            if(error) reject(error);
            resolve(results);
        });
    }); 
}

async function update(usuario, id) {

    return new Promise(function(resolve, reject){
        database.query(`update tb_usuario 
                        set nome ='${usuario.nome}', login ='${usuario.login}', senha ='${usuario.senha}', email ='${usuario.email}'
                        where id = ${id}`,
        (error, results, fields) => {
            if(error) reject(error);
            resolve(results);
        });
    }); 
}

async function exclude(id) {
    return new Promise(function(resolve, reject){
        database.query(`delete from tb_usuario where id = ${id};`,
        (error, results, fields) => {
            if(error) reject(error);
            resolve(results);
        });
    });
}