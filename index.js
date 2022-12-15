const express = require('express');

const server = express();

server.get('/home', ()=>{
    console.log('Você está tentando acessar a página home...');    
})

server.get('/', ()=>{
    console.log('Você está tentando acessar a página inicial')
})



server.listen(3000)