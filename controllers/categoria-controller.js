'use strict'
// Criando uma classe com ceito js
function categoriaController() {

}
// mas pode-se se usar assim
// class categoriaController{}

// Definindo as funçoes para dentro da classe
categoriaController.prototype.post = async (req, res) => { }
categoriaController.prototype.put = async (req, res) => { }
categoriaController.prototype.get = async (req, res) => {
    res.status(200).send('Funcionando... Listando Categorias')
}
categoriaController.prototype.getById = async (req, res) => {
    res.status(200).send(`O id passado foi ${req.params.id}`)
}
categoriaController.prototype.delete = async (req, res) => { }

module.exports = categoriaController