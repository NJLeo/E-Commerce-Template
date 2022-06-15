import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core';
import axios from "axios";

import "./modalContato.css";
// import { response } from 'express';

function ModalContato({ openModalContato, closeModalContato, setOpenModalContato }) {
    //console.log("Ativou Modal contato");

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
        //console.log('funcao handleContactFormInputChange e qual valor:', contactInfo);
    }

    //Func iniciada no Click do Botao Enviar, igual FormSubmit
    function handleSendEmail(event) {
        event.preventDefault();
        console.log('1 - Valor do contact info antes send: ', contactInfo);
        send();
    }
    function send() {
        console.log('2 - Executou send(), contactInfo ', contactInfo);

        const formData = new FormData();
        console.log('3 - Criou formData: ', formData);

        Object.keys(contactInfo).forEach(key => formData.append(key, contactInfo[key]));

        // Object.keys(contactInfo).forEach(key => {
        //     console.log('3 Iterando o contactInfo', key, contactInfo[key]);
        // });

        console.log('4 - formData após :', formData.data);

        Object.keys(formData).forEach(key => {
            console.log('5 Iterando o formData', key, formData[key]);
        });



        // var formData = new FormData();
        // formData.append('key1', 'value1');
        // formData.append('key2', 'value2');

        // // Display the key/value pairs
        // for (var pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        // }



        axios.post('/send', formData, {
            headers: {
                // 'Content-Type': `application/json;boundary=${{
                //     "nome": "nome1",
                //     "email": "email1",
                //     "mensagem": "msg1"
                // }}`
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
            }
        })
            .then(res => {
                alert(res.data);
                alert(formData.data);


                console.log('6 .then Alert', res.data, formData.entries(), formData);
            });

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
                    <form action="" className='formularioContato'>
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