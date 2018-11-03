const fornecedorRepository = require('./fornecedorRepository'),
error = require('../../configs/error');

module.exports = {
    get,
    getById,
    insert,
    update,
    exclude
}

async function get() {
     const data = await fornecedorRepository.get();
     return data;
 } 
 
 async function getById(id){
    const data = await fornecedorRepository.getById(id);
    return data;
 }
 
 async function insert(fornecedor){
    const data = await fornecedorRepository.insert(fornecedor);
    return data;
 }
 
 async function update(fornecedor, id){
    const data = await fornecedorRepository.update(fornecedor, id);
    return data;
 }
 
 async function exclude(id){
     const data = await fornecedorRepository.exclude(id);
     return data;
 }
    
