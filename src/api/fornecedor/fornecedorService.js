const fornecedorRepository = require('./fornecedorRepository');
const error = require('../../configs/error');
const utils = require('../../configs/utils');

module.exports = {
    get,
    getAll,
    getById,
    insert,
    update,
    exclude
}

async function get() {
     const data = await fornecedorRepository.get();
     return data
 } 

 async function getAll(req) {
    const limits = utils.defineLimit(req.params.page);
     const data = await fornecedorRepository.getAll(limits);
     const dataCount = await fornecedorRepository.count();
     return utils.responseHelpers(data, dataCount, req.params.page);
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
    
