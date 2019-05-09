import React from "react";
import "./style.css"


function Login(props) {
  return (
    <div className="zama-form">
      <div className={`container ${props.action === "signup" ? 'right-panel-active' : ''}`} id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={props.handleInputChange} />

            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              onChange={props.handleInputChange}
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={props.handleInputChange} />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={props.handleInputChange}
            />
            <button
              onClick={props.handleSignup}
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
              value={props.username}
              onChange={props.handleInputChange}
            />
            <input
              type="password"
              name="loginPassword"
              id="loginPassword"
              placeholder="Password"
              onChange={props.handleInputChange}
            />
            <button onClick={props.handleLogin}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left helloFriend">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" value="login" onClick={props.handleActionChange}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right helloFriend">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" value="signup" onClick={props.handleActionChange}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Login;

