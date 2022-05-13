import React, { useEffect, useState } from 'react';

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import "./modalContato.css";

function ModalContato({ openContatoModal, closeContatoModal }) {
    console.log("chegou");

    const [emailData, setEmailData] = useState(null);

    return (
        <>
            <Dialog
                open={openContatoModal}
                onClose={() => closeContatoModal()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth={'md'}
                keepMounted
            >
                <DialogTitle id="alert-dialog-title">
                    {/* <button
                        //className={classes.closeButton}
                        type="button"
                        onClick={() => {
                            closeContatoModal()
                        }}>
                        <CloseIcon
                            fontSize="large"
                        />
                    </button> */}

                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    {/* <ContactUsForm/> */}


                    <DialogContentText id="alert-dialog-description">
                        {"Use Google's location service?"}

                    </DialogContentText>

                </DialogContent>

                <DialogActions>
                    <Button onClick={closeContatoModal} autoFocus>
                        Agree
                    </Button>
                </DialogActions>

            </Dialog>
        </>
    )
}

export default ModalContato;