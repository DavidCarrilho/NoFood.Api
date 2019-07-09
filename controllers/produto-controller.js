'use strict'
// Criando uma classe com ceito js
function produtoController() {

}
// mas pode-se se usar assim
// class produtoController{}

// Definindo as funçoes para dentro da classe
produtoController.prototype.post = async (req, res) => { }
produtoController.prototype.put = async (req, res) => { }
produtoController.prototype.get = async (req, res) => {
    res.status(200).send('Funcionando... Listando os Produtos!')
}
produtoController.prototype.getById = async (req, res) => {
    res.status(200).send(`O id passado foi ${req.params.id}`)
}
produtoController.prototype.delete = async (req, res) => { }

module.exports = produtoController