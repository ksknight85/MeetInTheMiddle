import React from "react";

export default {

  Side1a() {
    return (
      <>
        <div className="side-1">
          <div className="header">
            <h2 className="h-main">Welcome Back!</h2>
            <p className="h-sec">Please log in with your username and password </p><button className="toggle-log">SIGN UP</button></div>
        </div>
      </>
    )
  },

  Side1b() {
    return (
      <>
        <fieldset>
          <h2 className="form-h">Sign in</h2>
          <div className="log-buttons"><a className="log-btn log-fb" href="#"></a><a className="log-btn log-gp" href="#"></a><a className="log-btn log-li" href="#"></a></div>
          <form action=""><input className="input-text" placeholder="Email" email="email" type="email" /><input className="input-text" placeholder="Password" type="password" /><a className="forgot" href="#">Forgot your password?</a><input className="input-submit" type="submit"
            value="SIGN IN" /></form>
        </fieldset>
      </>
    )
  }


}




