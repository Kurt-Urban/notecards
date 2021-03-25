import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { formValues, reduxForm } from 'redux-form';
import { addUser } from '../../actions';

const SignUp = (props) => {
    const [email, setEmail] = useState({ email: '' })
    const [pass, setPass] = useState({ password: '' })
    const [first, setFirst] = useState({ firstName: '' })
    const [last, setLast] = useState({ lastName: '' })

    useEffect(() => {
        addUser()
    }, [])

    const handleEmailChange = e => {
        setEmail({ email: e.target.value, });
    };
    const handlePassChange = e => {
        setPass({ password: e.target.value })
    };
    const handleFirstChange = e => {
        setFirst({ firstName: e.target.value });
    };
    const handleLastChange = e => {
        setLast({ lastName: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault()
        console.log(props.auth)
    };

    return (
        <div className="container">
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <div className="ui stacked form">
                        <form onSubmit={onSubmit} className="ui large form">
                            <h5>Sign Up</h5>
                            <div className="field">
                                <div class="ui left icon input">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        onChange={handleEmailChange}
                                        autoComplete="off"
                                    />
                                    <i class="user icon"></i>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <input
                                        type="password"
                                        onChange={handlePassChange}
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
                                        onChange={handleFirstChange}
                                        autoComplete="off"
                                        className="margin"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        onChange={handleLastChange}
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
    )
}

const mapStateToProps = state => {
    return { auth: state.auth }
};

export default connect(mapStateToProps, { addUser })(SignUp);