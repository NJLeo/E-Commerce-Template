import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core';
import axios from "axios";

import "./modalContato.css";
//import { response } from 'express';

//const [openModalContato, setOpenModalContato] = useState(false);
// const [openModalLogar, setOpenModalLogar] = useState(false);
// const [openModalSignUp, setOpenModalSignUp] = useState(false);

function ModalContato({ openModalContato, closeModalContato, setOpenModalContato }) {

    const [contactInfo, setContactInfo] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });

    function handleContactFormInputChange(event) {
        contactInfo[event.target.name] = event.target.value;
        setContactInfo(contactInfo);
        //contactInfo.nome;
        //contactInfo['nome'];
    };

    //Func iniciada no Click do Botao Enviar, igual FormSubmit
    function handleSendEmail(event) {
        event.preventDefault();
        console.log('1 - contactInfo: ', contactInfo);
        send(contactInfo);

    };

    function send() {

        const formData = new FormData();
        console.log('2 - new formData: ', formData);

        Object.keys(contactInfo).forEach(key => formData.append(key, contactInfo[key]));
        console.log('3 - formData após OBJ Keys :', formData.data, formData, formData._boundary);

        const exemploJson = JSON.stringify({
            "nome": "nome1",
            "email": "email1",
            "mensagem": "msg1"
        });

        const res = axios.post('/send', exemploJson, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // res.data.data;
        // res.data.headers['Content-Type'];


        // axios.post('/send', exemploJson, {
        //     headers: {
        //         'Content-Type': `application/json`,
        //         //'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,//   
        //     },
        //     body: exemploJson

        // })
        //     .then(response => alert(response.data));
    }

    return (
        <div>
            <Dialog
                open={openModalContato}
                onClose={() => closeModalContato()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
                //fullScreen
                maxWidth={'sm'}
                keepMounted
            // className='modalFormContato'
            // style={{ justifyContent: "space-between" }}
            >
                <DialogTitle id="alert-dialog-title" className='titulo text-center'>
                    {"Fale conosco"}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Diag Content Text
                    </DialogContentText>
                    <form action="" className='formularioContato' onSubmit={handleSendEmail} >
                        <label htmlFor="nome" className='formLabels'> Nome:  </label>
                        <input type="text" id="nome" name="nome" placeholder='Digite seu nome: ' onChange={handleContactFormInputChange} />
                        <br /><br />
                        <label htmlFor="email" className='formLabels'> Email:  </label>
                        <input type="text" id="email" name="email" placeholder='Digite seu email: ' onChange={handleContactFormInputChange} />
                        <br /><br />
                        <label htmlFor="mensagem" className='formLabels'> Mensagem:  </label>
                        <textarea type="text" id="mensagem" name="mensagem" placeholder='Escreva sua mensagem: ' onChange={handleContactFormInputChange} />
                    </form>

                </DialogContent>

                <DialogActions
                    className='itemsDivBotoes'
                >
                    <Button onClick={handleSendEmail} autoFocus>
                        Enviar
                    </Button>
                    <Button onClick={closeModalContato} autoFocus>
                        Fechar
                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    )

}

export default ModalContato;