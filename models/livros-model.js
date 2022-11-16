const mongoose = require('mongoose')

const Livros = mongoose.model('livros', {
    nome: String,
    valorUnitario: String,
    codigoBarra: String
})

module.exports = Livros