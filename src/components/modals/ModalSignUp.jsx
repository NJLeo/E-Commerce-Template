import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core';

import "./modalSignUp.css";

function ModalSignUp({ openModalSignUp, closeModalSignUp, setOpenModalSignUp }) {
    //console.log("chegou modal SignUp");

    return (
        <div>
            <Dialog
                open={openModalSignUp}
                onClose={() => closeModalSignUp()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth={'md'}
                keepMounted
            >
                <DialogTitle id="alert-dialog-title">
                   {"Sign Up"}
                </DialogTitle>
                <DialogContent>
                 
                    <DialogContentText id="alert-dialog-description">
                        {"Form SignUp SignUp SignUp "}
                    </DialogContentText>

                </DialogContent>

                <DialogActions>
                    <Button onClick={closeModalSignUp} autoFocus>
                        Fechar
                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    )
}

export default ModalSignUp;