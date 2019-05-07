import React, { Component } from "react";
import "./style.css"
import { Link } from 'react-router-dom'


class LoginModal extends Component {

  state = {
    action: "login",
  }


  componentDidMount(props) {
    this.setState({
      action: this.props.action
    })
  }




  render() {
    return (
      <div className="zama-form">
        <h2>Sign in/up Form</h2>
        <div className={`container ${this.state.action === "signup" ? 'right-panel-active' : ''}`} id="container">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <span>or use your email for registration</span>
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={this.props.handleInputChange} />

              <input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                onChange={this.props.handleInputChange}
              />

              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={this.props.handleInputChange} />

              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                onChange={this.props.handleInputChange}
              />
              <button
                onClick={this.props.handleSignup}
              >Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <span>or use your account</span>
              <input
                type="text"
                name="loginUsername"
                id="loginUsername"
                placeholder="Username"
                value={this.props.username}
                onChange={this.props.handleInputChange}
                valid={this.state.validUsername} />
              <input
                type="password"
                name="loginPassword"
                id="loginPassword"
                placeholder="Password"
                onChange={this.props.handleInputChange}
                />
              <Link to="#">Forgot your password?</Link>

              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="ghost" onClick={e => this.setState({ action: "login" })}>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" onClick={e => this.setState({ action: "signup" })}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginModal;

