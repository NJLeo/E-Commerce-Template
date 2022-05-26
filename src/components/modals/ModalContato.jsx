import React, { useEffect, useState } from 'react';

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import "./modalContato.css";

function ModalContato({ openModalContato, closeModalContato, setOpenModalContato }) {
    console.log("chegou modal contato");

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
                        {"Formulario de email Formulario de email Formulario de email Formulario de email Formulario de email Formulario de email Formulario de email Formulario de email Formulario de email"}

                    </DialogContentText>

                </DialogContent>

                <DialogActions>
                    <Button onClick={closeModalContato} autoFocus>
                        Fechar
                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    )
}

export default ModalContato;