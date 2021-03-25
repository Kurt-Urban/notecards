import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import GoogleAuth from './GoogleAuth'; removed

const Header = props => {
    const renderCreateNew = () => {
        return (
            <div className="middle menu">
                <Link to="/new" className="item">
                    Create List
                </Link>
            </div>
        )

    };
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Home
                </Link>
            <div className="right menu">
                <Link to="/me" className="item">
                    All Notes
                </Link>
                {renderCreateNew()}
                <div>
                    <Link to="/login" className="item">
                        Sign In
                </Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
    };
}

export default connect(mapStateToProps)(Header)