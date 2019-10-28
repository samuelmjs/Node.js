const express = require('express');

const server = express();

server.use(express.json());

const users = ['Samuel', 'Thiago', 'Lucas'];

//busca todos os usuários
server.get('/users', (req, res) => {
    return res.json(users);
})

//busca único usuário
server.get('/users/:index', (req, res) => {
    const { index } = req.params;

    return res.json(users[index]);
})

server.listen(3000);