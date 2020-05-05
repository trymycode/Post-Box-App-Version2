import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { auth } from "firebase";
import "../../styles/auth.css";
import { Redirect } from "react-router-dom";
export class SignedIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { signIn } = this.props;
    let creds = this.state;

    signIn(creds);
  };

  render() {
      const { authError, auth } = this.props;
      if( auth.uid ) return <Redirect to="/" />
    return (
      <div className="container">
        <form className="white authPanel" onSubmit={this.handleSubmit}>
          <h5>Sign In</h5>
          <div className="errorMsg red-text">
                {authError && <p>{authError}</p>}
            </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn signInBtn lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        authError: state.authReducer.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedIn);
