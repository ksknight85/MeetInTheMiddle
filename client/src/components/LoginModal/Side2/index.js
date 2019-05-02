import React from "react";

export default {

  Side2a() {
    return (
      <>
        <div className="side-2">
          <div className="header">
            <h2 className="h-main">Hey there!</h2>
            <p className="h-sec">Enter your personal details and start today!</p><button className="toggle-log">SIGN IN</button></div>
        </div>
      </>
    )
  },
  
  Side2b() {
    return (
      <>
        <fieldset className="block">
          <h2 className="form-h">Sign up</h2>
          <div className="log-buttons"><a className="log-btn log-fb" href="#"></a><a className="log-btn log-gp" href="#"></a><a className="log-btn log-li" href="#"></a></div>
          <form action=""><input className="input-text" placeholder="Email" email="email" type="email" /><input className="input-text" placeholder="Username" type="text" /><input className="input-text" placeholder="Password" password="password" type="password" /><input
            className="input-submit" type="submit" value="SIGN UP" /></form>
        </fieldset>
      </>
    )
  }


}




