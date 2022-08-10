//backend servidor
const path = require('path');
const http = require('http');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(require('cors')());
app.use(bodyParser.json());

// app.get('/', (req, res, next) => {
//    console.log('res json', res.json);
    
//     // res.json({message: "Tudo ok por aqui!"});
// })

// app.post('/send', (req, res, next) => {
//     res.json(req.body);
// })

const upload = require('multer')();
app.post('/send', (req, res, next) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const mensagem = req.body.mensagem;
    const anexo = req.file;

    require("./nodemail")(email, nome, mensagem, anexo)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error));
})


//trata funcoes / reqs que chegam no backend
app.use(express.static(path.join(__dirname, 'build')));

app.listen(3000, () => {
    console.log('Listen 3000 OK, Server start');
})

// const server = http.createServer(app); 
// server.listen(3030);
// console.log("Servidor escutando na porta 3030...")