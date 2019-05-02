import React, { Component } from "react";
import "./style.css"
import Side1 from "./Side1/index"
import Side2 from "./Side2/index"





class LoginModal extends Component {
  state = {
    activity: "signup"
  };



  render() {
    return (
      <>
        <div className="container">

          <Side1.Side1a />
          <Side2.Side2a />
          <div className="forms">
            <div className="sign-up">
              <div className="form">
                <Side2.Side2b />
              </div>
            </div>
            <div className="sign-in">
              <div className="form">
                <Side1.Side1b />
              </div>
            </div>
          </div>
        </div>

      </>
    )
  }
}





export default LoginModal;