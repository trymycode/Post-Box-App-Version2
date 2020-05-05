import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = (props) => {
  const { auth, profileDetails } = props;
  const links = auth.uid ? (
    <SignedInLinks profile={profileDetails} />
  ) : (
    <SignedOutLinks profile={profileDetails} />
  );
  return (
    <nav className="nav-wrapper nav-color">
      <div className="container">
        <Link to="/" className="brand-logo">
          <div className="logoImg"></div>
        </Link>
        {/* show these two links based on user authentication status */}
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profileDetails: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(Navbar);
