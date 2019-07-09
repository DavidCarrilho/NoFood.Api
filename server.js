// apenas a inicializaçao do app aqui
'use strict'

const app = require('../NoFood.Api/bin/express')
const variables = require('../NoFood.Api/bin/configuration/variables')

app.listen(variables.Api.port, () => {
    console.info(`Api inicialiada com sucesso na porta ${variables.Api.port}`)
})





// const express = require('express');
// const bodyParser = require('body-parser')
// const app = express();

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// let pessoas = [];

// //  ============================== GET - READ ==============================
// app.get('/', (req, res) => {
//     res.status(200).send(pessoas)
// });

// //  ============================== POST - CREAD ==============================
// app.post('/', (requisicao, resposta) => {
//     console.log("Corpo", requisicao.body)
//     pessoas.push(requisicao.body)
//     resposta.status(201).send(requisicao.body)
// });
// //  ============================== PUT - UPDATE ==============================
// app.put('/:id', (req, res) => {
//     let pessoaEncontrada = pessoas.filter(pes => { return pes.id == req.params.id })
//     pessoaEncontrada = req.body
//     res.status(202).send(pessoaEncontrada)
// });
// //  ================================= DELETE =================================
// app.delete('/:id', (req, res) => {
//     for (let index = 0; index < pessoas.length; index++) {
//         const pessoa = pessoas[index];
//         if (pessoa.id == req.params.id) {
//             pessoas.splice(index, 1)
//         }
//     }
//     res.status(204).send()
// });

// app.listen(3000, () => {
//     console.log('Servidor Api NoFood iniciano na porta 3000.');
// });
