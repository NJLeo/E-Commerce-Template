import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from '@material-ui/core';

import "./modalLogar.css";

function ModalLogar({ openModalLogar, closeModalLogar, setOpenModalLogar }) {
    console.log("chegou modal logar");

    return (
        <div>
            <Dialog
                open={openModalLogar}
                onClose={() => closeModalLogar()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth={'sm'}
                keepMounted
            >
                <DialogTitle id="alert-dialog-title">
                   {"Logar"}
                </DialogTitle>
                <DialogContent>
                 
                    <DialogContentText id="alert-dialog-description">
                        {"Formulario Logar Formulario Logar Formulario Logar Formulario Logar Formulario Logar Formulario Logar Formulario Logar Formulario Logar Formulario Logar "}
                    </DialogContentText>

                </DialogContent>

                <DialogActions>
                    <Button onClick={closeModalLogar} autoFocus>
                        Fechar
                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    )
}

export default ModalLogar;