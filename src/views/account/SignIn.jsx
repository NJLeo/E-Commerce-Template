import React, { lazy, Component } from "react";
//import { Link } from "react-router-dom";
const SignInForm = lazy(() => import("../../components/account/SignInForm"));

class SignInView extends Component {
  onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };
  render() {
    return (
      <div className="container my-3">
        <div className="row border">
          <div className="col-md-12 p-3">
            <h4 className="text-center">Entre em sua conta</h4>
            <SignInForm onSubmit={this.onSubmit} />
          </div>


        </div>
      </div>
    );
  }
}

export default SignInView;
