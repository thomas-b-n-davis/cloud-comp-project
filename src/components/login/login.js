import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import "../../css/login_signup.css";
import "../../css/index.css";
import axios from "axios";
import dog from '../../images/dog2.jpg';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      let errors = {};
      fields["emailid"] = "";
      fields["password"] = "";
      this.setState({ fields: fields });
      axios
        .post("/api/login", {
          email: this.state.fields["emailid"],
          password: this.state.fields["password"]
        })
        .then(response => {
          console.log(response);
          if (response.data.code == 200) {
            window.sessionStorage.setItem("userid", response.data.userId); 
            window.open("/profile");
          } else {
            errors["emailid"] = "Invalid Email or Password.";
            this.setState({
              errors: errors
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "Please enter valid email-ID.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/user" />;
    }
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">

          <div id="main-registration-container">
            <div id="register" >
              <h3 className="text-center">Login</h3>
              <form
                method="post"
                name="userRegistrationForm"
                onSubmit={this.submituserRegistrationForm}
              >
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="emailid"
                    placeholder="Enter Your Email"
                    value={this.state.fields.emailid}
                    onChange={this.handleChange}
                  />
                  <div className="errorMsg">{this.state.errors.emailid}</div>
                </div>

                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter Your Password"
                    value={this.state.fields.password}
                    onChange={this.handleChange}
                  />
                  <div className="errorMsg">{this.state.errors.password}</div>
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                  </div>
                </div>
                <div>
                  <input type="submit" className="btn btn-primary btn-block loginbtn" value="Login" name="login"/>
                  <div>
                    <Link to="/signup">
                      <p className="forgot-password text-right">
                        I want to register
                </p>
                    </Link>
                  </div>

                </div>

              </form>
              
            </div>
          </div>
        </div>
        <img src={dog} alt="this is car image" className="dog"/>
      </div>
    );
  }
}
 
export default Login;
