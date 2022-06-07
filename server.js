//backend servidor

//manipular caminhos no sistema de arqs
const path = require('path');

//requerir o pacote backend
const express = require('express');

//a aplicao backend que ficara rodando aguardando requisições
const app =  express();

//trata funcoes / reqs que chegam no backend
app.use(express.static)

app.listen(3000, () => {
    console.log('server start'); 
})