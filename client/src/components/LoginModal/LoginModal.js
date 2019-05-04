import React, { Component } from "react";
import "./style.css"


class LoginModal extends React.Component {

  state = {
    signin: "",
  }

  componentDidMount(props) {
    if (this.props.action === "login") {
      this.setState({
        signin: true
      })
    }
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
              <input type="text" placeholder="Name" />
              <input type="text" name="username" id="username" placeholder="username" value={this.props.username} onChange={this.props.handleInputChange} valid={this.state.validUsername} />
              <input type="email" placeholder="Email" />
              <input type="password" name="password" id="password" placeholder="password" value={this.props.password} onChange={this.props.handleInputChange} valid={this.state.validPassword} />
              <input type="password" name="confirmPassword" id="confirmPassword" placeholder="confirm password" value={this.props.confirmPassword} onChange={this.props.handleInputChange} valid={this.state.confirmPassword} />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <span>or use your account</span>
              <input type="text" name="username" id="username" placeholder="Username" value={this.props.username} onChange={this.props.handleInputChange} valid={this.state.validUsername} />
              <input type="password" name="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
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

// {/* <div className="social-container">
// <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
// <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
// <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
// </div>
// <div className="social-container">
// <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
// <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
// <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
// </div> */}
