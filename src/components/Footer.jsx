import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconTelephone } from "bootstrap-icons/icons/telephone.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconBriefcase } from "bootstrap-icons/icons/briefcase.svg";
import { ReactComponent as IconBadgeAd } from "bootstrap-icons/icons/badge-ad.svg";
import { ReactComponent as IconGift } from "bootstrap-icons/icons/gift.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
  faApple,
  faWindows,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="container-fluid bg-primary">
          <div className="row ">
            <div className="col-md-9 py-3 text-white">
              Get connected with us on social networks!
            </div>
            <div className="col-md-3 py-3 text-center text-white">
              <Link to="/" title="Apple">
                <FontAwesomeIcon icon={faApple} className="text-light mr-3" />
              </Link>
              <Link to="/" title="Windows">
                <FontAwesomeIcon icon={faWindows} className="text-light mr-3" />
              </Link>
              <Link to="/" title="Android">
                <FontAwesomeIcon icon={faAndroid} className="text-light mr-3" />
              </Link>
              |
              <Link to="/" title="Twitter">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-light ml-3 mr-3"
                />
              </Link>
              <Link to="/" title="Facebook">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-light mr-3"
                />
              </Link>
              <Link to="/" title="Instagram">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-light mr-3"
                />
              </Link>
              <Link to="/" title="Youtube">
                <FontAwesomeIcon icon={faYoutube} className="text-light mr-3" />
              </Link>
            </div>
          </div>
        </div>


        {/*Div da Row com as 4 colunas */}
        <div className="container-fluid bg-dark text-white">
          {/*Linha no footer com as 4 colunas */}
          <div className="row ">

            {/*Zn Eco Agro Descrição*/}
            <div className="col-md-3 py-3">
              <div className="h6">ZN Eco Agro</div>
              <hr />
              <p>
                A ZN Eco Agro quer oferecer os melhores produtos Agroecológicos para você! Ao comprar conosco você irá ajudar expandir negócios mais sustentáveis do que grandes coorporações e participar de uma economia mais solidária. Tentamos sempre que possível fazer parcerias com outros movimentos, pessoas e negócios mais sustentáveis, disponibilizando produtos oriundos desse nicho mais alinhados à natureza e ao planeta.
              </p>
            </div>

            {/*Produtos */}
            <div className="col-md-3 py-3">
              <div className="h6">Produtos</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Kits Veganos para o Dia à Dia
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Kits Veganos para Presente
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Outros Produtos
                  </Link>
                </li>

              </ul>
            </div>

            {/*Nossas Politicas */}
            <div className="col-md-3 py-3">
              <div className="h6">Nossas Políticas</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Política de Retorno
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Termos de Uso
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Segurança
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Privacidade
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Compliance LGPD
                  </Link>
                </li>
              </ul>
            </div>

            {/*Endereço*/}
            <div className="col-md-3 py-3">
              <div className="h6">Endereço</div>
              <hr />
              <address>
                <strong>ZN Eco Agro</strong>
                <br />
                XXXX Judith Zumkeller, ApXX
                <br />
                São Paulo, SP 02422-020
                <br />
                <abbr title="Phone">Whats:</abbr> (11) XXXX-XXXX
              </address>
              <div className="h6">Atendimento ao Consumidor</div>
              <hr />
              <IconTelephone /> +11 XXX XXX XXX
              <br />
              <IconEnvelope /> info@email.com
            </div>

          </div>
        </div>

        {/*Div da Row Parcerias / Propaganda / Presente / Data Atualização / Formas de Pagamento*/}
        <div className="container-fluid bg-secondary text-white text-center">
          <div className="row">
            <div className="col-md-2 py-2">
              <Link to="/" className="text-white text-decoration-none">
                <IconBriefcase className="text-warning" /> Parcerias
              </Link>
            </div>
            <div className="col-md-2 py-2">
              <Link to="/" className="text-white text-decoration-none">
                <IconBadgeAd className="text-info" /> Anuncie conosco
              </Link>
            </div>
            <div className="col-md-2 py-2">
              <Link to="/" className="text-white text-decoration-none">
                <IconGift className="text-dark" /> Presentes
              </Link>
            </div>
            <div className="col-md-3 py-2">
              © 2022-{new Date().getFullYear()} www.znecoagro.com.br </div>
            <div className="col-md-3 py-2 bg-white">
              <img
                src="../../images/payment/pix.svg"
                width="52"
                alt="PIX"
                className="mr-2"
              />

              <img
                src="../../images/payment/visa.webp"
                width="52"
                alt="Visa"
                className="mr-2"
              />

              <img
                src="../../images/payment/mastercard.svg"
                width="52"
                alt="Mastercard"
                className="mr-2"
              />

            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
