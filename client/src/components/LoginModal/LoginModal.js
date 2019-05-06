import React, { Component } from "react";
import "./style.css"
import { Link } from 'react-router-dom'


class LoginModal extends Component {

  state = {
    signin: "",
    name: "",
    username: "",
    email: "",
    password: "",
  }

  componentDidMount(props) {
    if (this.props.action === "login") {
      this.setState({
        signin: true
      })
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();

  }
  

  render() {
    const { signin = true } = this.state;
    return (
      <div className="zama-form">
        <h2>Sign in/up Form</h2>
        <div className={`container ${!signin ? 'right-panel-active' : ''}`} id="container">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <span>or use your email for registration</span>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange} />

              <input
                type="text"
                name="username"
                id="username"
                placeholder="username"
              />

              <input
                type="email"
                placeholder="Email" />

              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button onClick={this.handleFormSubmit}>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <span>or use your account</span>
              <input type="text" name="username" id="username" placeholder="Username" value={this.props.username} onChange={this.props.handleInputChange} valid={this.state.validUsername} />
              <input type="password" name="password" placeholder="Password" />
              <Link to="#">Forgot your password?</Link>
              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="ghost" onClick={e => this.setState({ signin: true })}>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" onClick={e => this.setState({ signin: false })}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginModal;

