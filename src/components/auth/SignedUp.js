import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import "../../styles/auth.css";
import { signUp } from "../../store/actions/authActions";

export class SignedUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      imageUrl: "",
      showWarnging: false,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { signUp } = this.props;
    const { email, password, firstName, lastName } = this.state;
    console.log("Submitted", this.state);
    if (email != "" && password != "" && firstName != "" && lastName != "") {
      signUp(this.state);
    } else {
      this.setState({
        showWarnging: true,
      });
    }
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form className="white authPanel" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="errorMsg red-text">
              {authError && <p>{authError}</p>}
              {this.state.showWarnging && (
                <p className="red-text">Please provide required information</p>
              )}
            </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={this.handleChange}
              maxLength="30"
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
              minlength="3"
              maxlength="20"
            />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              onChange={this.handleChange}
              maxlength="15"
              minlength="3"
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              onChange={this.handleChange}
              maxlength="15"
              minlength="3"
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Profile Picture URL</label>
            <input
              type="text"
              id="imageUrl"
              onChange={this.handleChange}
            />
          </div>
          {/* <div className="imageField">
            <label className="imageLabel">Upload Profile Picture</label>
            <input
              type="file"
              id="imageUrl"
              accept="image/x-png,image/gif,image/jpeg"
              onChange={this.handleChange}
            />
          </div> */}
          <div className="input-field">
            <button className="btn z-depth-0 signUpBtn">Sign up</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.authReducer.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedUp);
