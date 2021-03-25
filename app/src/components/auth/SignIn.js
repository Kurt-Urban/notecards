import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' })

    const handleChange = e => {
        setCredentials({
            email: e.target.value,
            password: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault()
        console.log(credentials)
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
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    <i class="user icon"></i>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <input
                                        type="password"
                                        onChange={handleChange}
                                        placeholder="Password"
                                        autoComplete="off"
                                    />
                                    <i class="lock icon"></i>
                                </div>
                            </div>
                            <div>
                                <button className="ui fluid large primary submit button">Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="ui secondary segment">
                        New to Notecards? {''}
                        <Link to="/signup">Sign Up!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null)(SignIn);