import React, { Component } from "react";
import Login from "../../components/Login";
import Signup from "../../components/Signup";
import API from "../../utils/API";
import LoginModal from "../../components/LoginModal/index.js"

class Auth extends Component {

  state = {
    loggedIn: false,
    user: null,
    message: "",
    name: "",
    username: "",
    email: "",
    password: ""
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
    if (this.state.username && this.state.password) {
      API.login({
        username: this.state.username,
        password: this.state.password
      }).then(user => {
        console.log(user);
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
    console.log("hi")
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

  render() {
    return (
      <>
        {(this.props.action === "login") ? (
          <LoginModal
            action="login"
            name={this.state.username}
            username={this.state.username}
            password={this.state.password}
            handleLogin={this.handleLogin}
            handleInputChange={this.handleInputChange}
            message={this.state.message}
            handleSignup={this.handleSignup}
          ><div id="app" /></LoginModal>
        ) : (
            <LoginModal
              action="signup"
              name={this.state.username}
              username={this.state.username}
              password={this.state.password}
              handleLogin={this.handleLogin}
              handleInputChange={this.handleInputChange}
              message={this.state.message}
              handleSignup={this.handleSignup}
            ><div id="app" /></LoginModal>
          )}
      </>
    )
  }
}

export default Auth;

// {/* <div className="authBox">
//           {(this.props.action === "login") ? (
//             <Login
//               username={this.state.username}
//               password={this.state.password}
//               handleLogin={this.handleLogin}
//               handleInputChange={this.handleInputChange}
//               message={this.state.message}
//             />
//           ) : (
//               <Signup
//                 username={this.state.username}
//                 password={this.state.password}
//                 confirmPassword={this.state.confirmPassword}
//                 handleSignup={this.handleSignup}
//                 handleInputChange={this.handleInputChange}
//                 message={this.state.message}
//               />
//             )}
//         </div> */}



