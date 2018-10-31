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
    try {
 
     const retorno = await fornecedorRepository.get();
 
    } catch (error) {
        throw error;
    }
 } 
 
 async function getById(id){
     try {
         const retorno = await fornecedorRepository.getById(id);
     } catch (error) {
         throw error;
     }
 }
 
 async function insert(fornecedor){
     try {
         const retorno = await fornecedorRepository.insert(fornecedor);
     } catch (error) {
         throw error;
     }
 }
 
 async function update(fornecedor){
     try {
        const retorno = await fornecedorRepository.update(fornecedor);
     } catch (error) {
         throw error;
     }
 }
 
 async function exclude(id){
     try {
         const retorno = await fornecedorRepository.exclude(id);
     } catch (error) {
         throw error;
     }
 }
    
