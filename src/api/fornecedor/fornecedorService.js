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

     const retorno = await fornecedorRepository.get();

 } 
 
 async function getById(id){
    
    const retorno = await fornecedorRepository.getById(id);
     
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
    
