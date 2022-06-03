import React, { Suspense, lazy, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";

import ModalContato from '../components/modals/ModalContato';
import ModalLogar from '../components/modals/ModalLogar';
import ModalSignUp from '../components/modals/ModalSignUp';

import './header.css';

////////////////////////
const Header = () => {

  const [openModalContato, setOpenModalContato] = useState(false);
  const [openModalLogar, setOpenModalLogar] = useState(false);
  const [openModalSignUp, setOpenModalSignUp] = useState(false);


  return (
    <React.Fragment >
      <div
        className="container-fluid"
        id="headerTodo"
      >

        {/* Div com 2 logos */}
        <div className="text-center p-2">
          <Link to="/" >
            <img
              alt="logo"
              src="../../images/222-removebg-preview.png"
              className="logoCasa"
            />
          </Link>
          <Link to="/">
            <img
              alt="logo"
              src="../../images/escritologo-removebg-preview.png"
            //src="../../images/nortenaturalcerealista.png "
            //src="../../images/222-removebg-preview.png"
            />
          </Link>
        </div>

        {/* Div linha com 3 botoes*/}
        <div className="m-1 p-2 linhaBotoes">

          <div className="container d-flex justify-content-center">

            <div className="row align-items-center">

              {/* Botão Criar Conta com Modal */}
              <div className="col botaoDaLinha">

                <Button
                  variant="contained"
                  color="primary"
                  className="ModalSignUp"
                  onClick={() => setOpenModalSignUp(true)}
                > Criar Conta
                </Button>

                <ModalSignUp
                  className="modalSignUp"
                  setOpenModalSignUp={() => setOpenModalSignUp(true)}
                  openModalSignUp={openModalSignUp}
                  closeModalSignUp={() => setOpenModalSignUp(false)}
                />

              </div>

              {/* Botão Contato com Modal */}
              <div className="col botaoDaLinha">

                <Button
                  variant="contained"
                  color="primary"
                  className="aeaeae"
                  onClick={() => setOpenModalContato(true)}
                > Contato
                </Button>

                <ModalContato
                  className='modalFormContato'
                  setOpenModalContato={() => setOpenModalContato(true)}
                  openModalContato={openModalContato}
                  closeModalContato={() => setOpenModalContato(false)}
                  // style={{ color: "notworking" }}
                />


              </div>

              {/* Botão Logar com Modal */}
              <div className="col botaoDaLinha">

                <Button
                  variant="contained"
                  color="primary"
                  className="modalLogar"
                  onClick={() => setOpenModalLogar(true)}
                > Logar
                </Button>

                <ModalLogar
                  className="ModalLogar"
                  setOpenModalLogar={() => setOpenModalLogar(true)}
                  openModalLogar={openModalLogar}
                  closeModalLogar={() => setOpenModalLogar(false)}
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </React.Fragment>
  );
};
export default Header;
