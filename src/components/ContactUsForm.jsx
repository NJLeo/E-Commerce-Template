import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import {
  renderFormGroupField,
  renderFormTextArea,
  renderFormCheckbox,
} from "../helpers/renderForm";
import {
  required,
  maxLength50,
  name,
  maxLengthMobileNo,
  minLengthMobileNo,
  digit,
  email,
  maxLength1000,
} from "../helpers/validation";
import { ReactComponent as IconPersonFill } from "bootstrap-icons/icons/person-fill.svg";
import { ReactComponent as IconBuilding } from "bootstrap-icons/icons/building.svg";
import { ReactComponent as IconPhoneFill } from "bootstrap-icons/icons/phone-fill.svg";
import { ReactComponent as IconEnvelopeFill } from "bootstrap-icons/icons/envelope-fill.svg";

const ContactUsForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >
      {/* Primeira linha do Formulario */}
      <div className="row">
        <div className="col-md-6">
          <Field
            name="name"
            type="text"
            label="Nome"
            component={renderFormGroupField}
            placeholder="Seu nome completo"
            icon={IconPersonFill}
            required={true}
            validate={[required, maxLength50, name]}
            pattern="[a-zA-Z\s]*"
            maxLength="50"
            className="mb-3"
          />
        </div>
        <div className="col-md-6">
          <Field
            name="company"
            type="text"
            label="Empresa"
            component={renderFormGroupField}
            placeholder="Nome da Empresa"
            icon={IconBuilding}
            required={true}
            validate={[required, maxLength50]}
            maxLength="50"
            className="mb-3"
          />
        </div>
      </div>

      {/* Segunda linha do Formulario */}
      <div className="row">
        <div className="col-md-6">
          <Field
            name="mobileNo"
            type="number"
            label="Número de Celular"
            component={renderFormGroupField}
            placeholder="DDD + Número de Celular"
            icon={IconPhoneFill}
            validate={[required, maxLengthMobileNo, minLengthMobileNo, digit]}
            required={true}
            max="999999999999999"
            min="9999"
            className="mb-3"
          />
        </div>
        <div className="col-md-6">
          <Field
            name="email"
            type="email"
            label="Endereço de Email "
            component={renderFormGroupField}
            placeholder="Seu endereço de Email"
            icon={IconEnvelopeFill}
            validate={[required, maxLength50, email]}
            maxLength="50"
            required={true}
            className="mb-3"
          />
        </div>
      </div>

      {/* Div com Campo Mensagem e Checkbox */}
      <div className="row g-3">

        {/* Campo Mensagem*/}
        <div className="col-md-12">
          <Field
            name="message"
            label="Mensagem"
            maxLength="1000"
            component={renderFormTextArea}
            validate={maxLength1000}
            placeholder="Qual informação deseja?"
          />
        </div>

        {/* Checkbox */}
        <div className="col-md-12">
          <Field
            id="informed"
            label="Mantenha-me com informações via email ou telefone sobre nossos produtos e serviços."
            name="informed"
            component={renderFormCheckbox}
          />
        </div>

      </div>

      {/* Botão Submit */}
      <button
        type="submit"
        className="btn btn-primary btn-block mt-3"
        disabled={submitting}
      >
        Enviar
      </button>

    </form>
  );
};

export default compose(
  reduxForm({
    form: "demo1",
  })
)(ContactUsForm);
