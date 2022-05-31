import React from "react";
import { Link } from "react-router-dom";
import './TopMenu.css';


const TopMenu = () => {
  return (
    <React.Fragment>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark topMenu p-1">
        <div className="container-fluid  text-center">

          <Link className="navbar-brand text-center" to="/">
            EcoAgro ZN
          </Link> 


          {/* Toggler da Navbar Interna */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Navbar Interna */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav">

              <li className="nav-item dropdown ">

                <button
                  className="btn nav-link dropdown-toggle font-weight-bold"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Navegue
                </button>

                <ul className="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/account/signin">
                      Entre em sua conta
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/signup">
                      Inscrever
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/checkout">
                      Finalizar Compra
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/contact-us">
                      Contato
                    </Link>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/fsafasf">
                      404 Página não encontrada
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/500">
                      500 Internal Server Error
                    </Link>
                  </li>

                </ul>

              </li>


              {/*Kits Veganos Dia a Dia */}
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Kits Veganos para o Dia a Dia
                </Link>
              </li>

              {/* Kits Veganos Presente */}
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Kits Veganos para Presente
                </Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Outros Produtos
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/documentation">
                  Documentação
                </Link>
              </li>

              {/* Item do Navbar Botão Navegue */}


            </ul>
          </div>

        </div>
      </nav>
    </React.Fragment>
  );
};

export default TopMenu;
