import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { formValues, reduxForm } from "redux-form";
import { addUser } from "../../actions";

const SignUp = ({ auth, newUser }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChangeBinder = (name) => (e) => {
    setCredentials({
      ...credentials,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(credentials);
    console.log(addUser(credentials));
    console.log(credentials);
  };

  return (
    <div className="container">
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <div className="ui stacked form">
            <form onSubmit={handleSubmit} className="ui large form">
              <h5>Sign Up</h5>
              <div className="field">
                <div class="ui left icon input">
                  <input
                    type="email"
                    placeholder="Email Address"
                    onChange={handleChangeBinder("email")}
                    autoComplete="off"
                  />
                  <i class="user icon"></i>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <input
                    type="password"
                    onChange={handleChangeBinder("password")}
                    placeholder="Password"
                    autoComplete="off"
                  />
                  <i class="lock icon"></i>
                </div>
              </div>
              <div className="field">
                <div class="ui fluid text input">
                  <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChangeBinder("firstName")}
                    autoComplete="off"
                    className="margin"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChangeBinder("lastName")}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div>
                <button className="ui fluid large primary submit button">
                  <i className="signup icon"></i>
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth, newUser: state.newUser };
};

export default connect(mapStateToProps, { addUser })(SignUp);
