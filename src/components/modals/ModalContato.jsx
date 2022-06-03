import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core';

import "./modalContato.css";

function ModalContato({ openModalContato, closeModalContato, setOpenModalContato }) {
    console.log("Ativou Modal contato");

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
                        <input type="text" id="nome" name="nome" placeholder='Digite seu nome: ' />
                        <br /><br />
                        <label htmlFor="email" className='formLabels'> Email:  </label>
                        <input type="text" id="email" name="email" placeholder='Digite seu email: ' />
                        <br /><br />
                        <label htmlFor="mensagem" className='formLabels'> Mensagem:  </label>
                        <textarea type="text" id="mensagem" name="mensagem" placeholder='Escreva sua mensagem: ' />
                    </form>

                </DialogContent>

                <DialogActions
                    className='itemsDivBotoes'
                >
                    <Button onClick={closeModalContato} autoFocus>
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