import React, { useEffect, useState } from 'react';

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
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
            >
                <DialogTitle id="alert-dialog-title">
                    {"Fale conosco"}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <form action="">
                            <label htmlFor="nome" className='nome'> Nome: </label>
                            <input type="text" id="nome" name="nome" placeholder='Digite seu nome: ' />
                            <label htmlFor="email"> Email: </label>
                            <input type="text" id="email" name="email" placeholder='Digite seu email: ' />
                            <label htmlFor="mensagem"> Mensagem: </label>
                            <textarea type="text" id="mensagem" name="mensagem" placeholder='Escreva sua mensagem: ' />
                        </form>
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
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