import React, { Suspense, lazy, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";

import Search from "./Search";

import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import { ReactComponent as IconPersonBadgeFill } from "bootstrap-icons/icons/person-badge-fill.svg";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconListCheck } from "bootstrap-icons/icons/list-check.svg";
import { ReactComponent as IconDoorClosedFill } from "bootstrap-icons/icons/door-closed-fill.svg";
import { ReactComponent as IconHeartFill } from "bootstrap-icons/icons/heart-fill.svg";
import { ReactComponent as IconBellFill } from "bootstrap-icons/icons/bell-fill.svg";
import { ReactComponent as IconInfoCircleFill } from "bootstrap-icons/icons/info-circle-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

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
      <div id="headerTodo">
        <div className="container-fluid">

          {/* Link logo EcoagroZn Cerealista em Verde */}
          <div className="text-center border border-dark border-5 ">
            <Link to="/">
              <img
                alt="logo"
                //src="../../images/nortenaturalcerealista.png "
                 src="../../images/escritologo.png"
              />
            </Link>
          </div>

          {/* Div linha com 3 botoes*/}
          {/* <div className="container"> */}
          <div className="d-flex justify-content-center">
            <div className="row ">

              {/* Botão Contato com Modal */}
              <div className="col">
                <Button
                  variant="contained"
                  color="primary"
                  className="aeaeae"
                  onClick={() => setOpenModalContato(true)}
                > Contato
                </Button>

                <ModalContato
                  setOpenModalContato={() => setOpenModalContato(true)}
                  openModalContato={openModalContato}
                  closeModalContato={() => setOpenModalContato(false)}
                />


              </div>

              {/* Botão Logar com Modal */}
              <div className="col">

                <Button
                  variant="contained"
                  color="primary"
                  className="ModalLogara"
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

              {/* Botão Criar Conta com Modal */}
              <div className="col">

                <Button
                  variant="contained"
                  color="primary"
                  className="ModalSignUp"
                  onClick={() => setOpenModalSignUp(true)}
                > Criar Conta
                </Button>

                <ModalSignUp
                  className="ModalSignUp"
                  setOpenModalSignUp={() => setOpenModalSignUp(true)}
                  openModalSignUp={openModalSignUp}
                  closeModalSignUp={() => setOpenModalSignUp(false)}
                />

              </div>

            </div>
          </div>

          {/* Div Icones e pesquisa 
          <div classname="row">

            {/* Icone Carrinho de Compras 
            <div className="col">
              <Link to="/cart" className="btn btn-primary">
                <IconCart3 className="i-va" />
              </Link>
            </div>

            {/* Icone Perfil Usuario 
            <div className="col btn-group">

              <button
                type="button"
                className="btn btn-secondary rounded-circle border mr-3 dropdown-toggle1"
                data-toggle="dropdown"
                aria-expanded="false"
                aria-label="Profile"
              >
                <FontAwesomeIcon icon={faUser} className="text-light" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/account/profile">
                    <IconPersonBadgeFill /> My Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/star/zone">
                    <IconStarFill className="text-warning" /> Star Zone
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/account/orders">
                    <IconListCheck className="text-primary" /> Orders
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/account/wishlist">
                    <IconHeartFill className="text-danger" /> Wishlist
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/account/notification">
                    <IconBellFill className="text-primary" /> Notification
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/support">
                    <IconInfoCircleFill className="text-success" /> Support
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <IconDoorClosedFill className="text-danger" /> Logout
                  </Link>
                </li>
              </ul>

            </div>

            {/* Barra de Procura
            <div className="col">
              <Search />
            </div>

          </div> */}

        </div>

      </div>

    </React.Fragment>
  );
};
export default Header;
