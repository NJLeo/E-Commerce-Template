//backend servidor
//manipular caminhos no sistema de arqs
const path = require('path');
//requerir o pacote backend
const express = require('express');

//a aplicao backend que ficara rodando aguardando requisições
const app =  express();

app.use(require('cors')());
app.use(express.json());

app.post('/send', (req, res, next) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const mensagem = req.body.mensagem;
    //const anexo = req.file;
    
    //res.json(req.body);
    res.json.toString({
        nome,
        email,
        mensagem,
        //anexo
    });
    
})


//trata funcoes / reqs que chegam no backend
app.use(express.static(path.join(__dirname, 'build')));

app.listen(3000, () => {
    console.log('Listen 3000 OK, Server start'); 
})