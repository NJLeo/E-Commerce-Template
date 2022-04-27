import React, { lazy, Component } from "react";
import { ReactComponent as IconEnvelopeFill } from "bootstrap-icons/icons/envelope-fill.svg";
import { ReactComponent as IconHouseFill } from "bootstrap-icons/icons/house-fill.svg";
import { ReactComponent as IconTelephoneFill } from "bootstrap-icons/icons/telephone-fill.svg";

const ContactUsForm = lazy(() => import("../../components/ContactUsForm"));

class ContactUsView extends Component {
  onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };

  render() {
    return (
      <div className="container my-3">
        <div className="row g-3">

          {/* Card  Entre em Contato*/}
          <div className="col-md-8">  
            <div className="card">

              {/* Titulo*/}
              <div className="card-header">
                <IconEnvelopeFill className="i-va" /> Envie uma mensagem
              </div>

              {/* Form Contact Us */}
              <div className="card-body">
                <ContactUsForm onSubmit={this.onSubmit} />
              </div>

            </div>
          </div>

          {/* Div Card Endereço + Mapa*/}
          <div className="col-md-4">

            {/* Card Endereço*/}
            <div className="card mb-3">

              {/* Titulo do Card Endereço */}
              <div className="card-header">
                <IconHouseFill className="i-va" /> Endereço
              </div>

              {/* Corpo do Card Endereço */}
              <div className="card-body">
                <h6 className="card-title border-bottom border-dark pb-2">Sede</h6>
                <address>
                  <strong>Zn Eco Agro.</strong>
                  <br />
                  xxxx Judith Zumkeller, Ap XX
                  <br />
                  São Paulo, SP 02422-020
                  <br />
                  <IconTelephoneFill className="i-va" />{" "}
                  <abbr title="Celular">Whats:</abbr> (11) XXXX-XXXX
                </address>
                <h6 className="card-title border-bottom border-dark pb-2">Sede</h6>
                <address>
                  <strong>Zn Eco Agro.</strong>
                  <br />
                  xxxx Judith Zumkeller, Ap XX
                  <br />
                  São Paulo, SP 02422-020
                  <br />
                  <IconTelephoneFill className="i-va" />{" "}
                  <abbr title="Celular">Whats:</abbr> (11) XXXX-XXXX
                </address>
              </div>

            </div>

            {/* Mapa do Google Maps */}
            <div className="card">
              <div className="google-maps">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d457.4550443584627!2d-46.637015180837714!3d-23.473433914036306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7a9f9f2bd0b%3A0x6ac34a04d38f46cf!2sRua%20Judith%20Zumkeller%20-%20Parque%20Mandaqui%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002422-020!5e0!3m2!1spt-BR!2sbr!4v1651093751102!5m2!1spt-BR!2sb"
                  width={400}
                  height={300}
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  title="Localização"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default ContactUsView;
