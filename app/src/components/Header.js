import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import GoogleAuth from './GoogleAuth'; removed

const Header = ({ isSignedIn, auth }) => {
  const renderCreateNew = () => {
    if (!isSignedIn) {
      <div className="middle menu">
        <Link to="/login" className="item">
          Create List
        </Link>
      </div>;
    } else {
      return (
        <div className="middle menu">
          <Link to="/new" className="item">
            Create List
          </Link>
        </div>
      );
    }
  };
  const renderSignIn = () => {
    if (!isSignedIn) {
      return (
        <Link to="/login" className="item">
          Sign In
        </Link>
      );
    } else {
      return (
        <div className="item">
          {auth.firstName} {auth.lastName}
        </div>
      );
    }
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
        <div>{renderSignIn()}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Header);
