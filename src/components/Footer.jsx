import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconTelephone } from "bootstrap-icons/icons/telephone.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconBriefcase } from "bootstrap-icons/icons/briefcase.svg";
import { ReactComponent as IconBadgeAd } from "bootstrap-icons/icons/badge-ad.svg";
import { ReactComponent as IconGift } from "bootstrap-icons/icons/gift.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="container-fluid bg-dark" id="footerTodo">
          <div className="row">
            <div className="col-md-9 py-3 text-center text-white">
              Conecte-se com nossas redes sociais!
            </div>
            <div className="col-md-3 py-3 text-center text-white">
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
