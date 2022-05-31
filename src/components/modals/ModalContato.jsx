import React, { useEffect, useState } from 'react';

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Grid } from '@material-ui/core';
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
                fullWidth={true}
                maxWidth={'md'}
                keepMounted
                className='modalFormContato flex'
                style={{ justifyContent: "space-between" }}
            >
                <DialogTitle id="alert-dialog-title" className='titulo'>
                    {"Fale conosco"}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
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
                    </DialogContentText>
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