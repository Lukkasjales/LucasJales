const express = require('express');
const server = express();
const path = require('path');

(async() => {
 const database = require('./db');
 const Perfil = require('./modelos/perfil');
 
 try{
    const resultado = await database.sync();
    console.log(resultado);

    
    const resultadoCreate = await Perfil.create({
        nome: 'luciano 6',
        sobrenome: 'alexandre',
        telefone: '99999999',
        bairro: 'bairro teste',
        rua: 'rua teste',
        cep: '5900000',
        estado: 'PB',
        email: 'luciano.silva@ifpb.edu.br',
        pais: 'BRASIL',
        login: 'luciano',
        senha: 'senha123'
    })

    const resultadoCreate2 = await Perfil.create({
        nome: 'luciano 5',
        sobrenome: 'alexandre',
        telefone: '99999999',
        bairro: 'bairro teste',
        rua: 'rua teste',
        cep: '5900000',
        estado: 'PB',
        email: 'luciano.silva@ifpb.edu.br',
        pais: 'BRASIL',
        login: 'luciano',
        senha: 'senha123'
    })

    console.log(resultadoCreate);
    console.log(resultadoCreate2);

 }catch(error){
    console.log(error);
 }
})();


server.get('/perfil', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/perfil.html'));   
})

server.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/index.html'));
})

server.get('/tarefas', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/tarefas.html'));
})

server.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/register.html'));
})

server.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/login.html'));
})


server.listen(3000)