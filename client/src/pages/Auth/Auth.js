import React, { Component } from "react";
import API from "../../utils/API";
import Login from "../../components/Login/index.js"

class Auth extends Component {

  state = {
    loggedIn: false,
    user: null,
    message: "",
    name: "",
    username: "",
    email: "",
    password: "",
    loginPassword: "",
    loginUsername: "",
    action: this.props.action
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleLogin = event => {
    event.preventDefault();
    if (this.state.loginUsername && this.state.loginPassword) {
      API.login({
        username: this.state.loginUsername,
        password: this.state.loginPassword
      }).then(user => {
        if (user.data.loggedIn) {
          this.setState({
            loggedIn: true,
            user: user.data.user
          });
          console.log("log in successful");
          window.location.href = '/profile';
        }
        else if (user.data.message) {
          this.setState({
            message: user.data.message
          })
        }
      });
    }
  }

  handleSignup = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.signup({
        username: this.state.username,
        password: this.state.password
      }).then(user => {
        if (user.data.loggedIn) {
          this.setState({
            loggedIn: true,
            user: user.data.user
          });
          console.log("log in successful");
          window.location.href = '/profile';
        } else {
          console.log("something went wrong :(")
          console.log(user.data);
          this.setState({
            message: user.data
          })
        }
      });
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.action !== prevProps.action) {
      this.setState({
        action: this.props.action
      })
    }
  }
  handleActionChange = event => {
    this.setState({
      action: event.target.value
    })
  }

  render() {
    return (
      <>
        {(this.state.action === "login") ? (
          <Login
            action={this.state.action}
            name={this.state.username}
            username={this.state.loginUsername}
            loginPassword={this.state.loginPassword}
            handleLogin={this.handleLogin}
            handleInputChange={this.handleInputChange}
            handleActionChange={this.handleActionChange}
            message={this.state.message}
            handleSignup={this.handleSignup}
          ><div id="app" /></Login>
        ) : (
            <Login
              action={this.state.action}
              name={this.state.username}
              username={this.state.username}
              password={this.state.password}
              handleLogin={this.handleLogin}
              handleInputChange={this.handleInputChange}
              handleActionChange={this.handleActionChange}
              message={this.state.message}
              handleSignup={this.handleSignup}
            ><div id="app" /></Login>
          )}
      </>
    )
  }
}

export default Auth;