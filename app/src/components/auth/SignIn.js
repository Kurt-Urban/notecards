import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions";

const SignIn = ({ login }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChangeBinder = (name) => (e) => {
    setCredentials({
      ...credentials,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials);
    console.log(login(credentials));
  };

  return (
    <div className="container">
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <div className="ui stacked form">
            <form onSubmit={handleSubmit} className="ui large form">
              <h5>Sign In</h5>
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
              <div>
                <button className="ui fluid large primary submit button">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="ui secondary segment">
            New to Notecards? {""}
            <Link to="/signup">Sign Up!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({ auth: state.auth }), { login })(SignIn);
