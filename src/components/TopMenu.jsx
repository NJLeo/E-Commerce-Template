import React from "react";
import { Link } from "react-router-dom";
import './TopMenu.css';


const TopMenu = () => {
  return (
    <React.Fragment>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
        <div className="container-fluid">

          <Link className="navbar-brand" to="/">
            ZN Eco Agro
          </Link>

          {/* Botão Quando Diminui o Menu pra Lista */}
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

          {/* Navbar */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">

              {/* Item do Navbar Botão Navegue */}
              <li className="nav-item dropdown">
                
                <button
                  className="btn nav-link dropdown-toggle font-weight-bold"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Navegue
                </button>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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

                  {/* <li>
                    <Link className="dropdown-item" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blog/detail">
                      Blog Detail
                    </Link>
                  </li> */}

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

              
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default TopMenu;
