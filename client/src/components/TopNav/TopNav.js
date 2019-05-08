import React, { Component } from "react";
import "./navbar.css";
import API from "../../utils/API";
import { Link } from 'react-router-dom'

export default class Navigation extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      loggedIn: false
    };
  }

  componentDidMount() {
    API.isLoggedIn().then(user => {
      if (user.data.loggedIn) {
        this.setState({
          loggedIn: true
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  logout() {
    API.logout().then((data) => {
      window.location.pathname = "/"
    }).catch((err) => {
      console.log(err)
    })
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>


        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <Link className="navbar-brand" to="#"><img src="./assets/images/MeetInTheMiddleSmall.png" alt="logo" height="40px" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {this.state.loggedIn ? (
              <ul className="navbar-nav">

                <Link to="/"><li className="nav-item active nav-link">Home<span className="sr-only">(current)</span></li></Link>
                <Link to="/search"><li className="nav-item nav-link">Search</li></Link>
                <Link to="/profile"><li className="nav-item nav-link">Profile</li></Link>
                <Link to="#"><li onClick={this.logout}className="nav-item nav-link">Logout</li></Link>
              </ul>
            ) : (
                <ul className="navbar-nav">
                <Link to="/"><li className="nav-item active, nav-link">Home<span className="sr-only">(current)</span></li></Link>
                <Link to="/search"><li className="nav-item nav-link">Search</li></Link>
                <Link to="/login"><li className="nav-item nav-link">Login</li></Link>
                <Link to="/signup"><li className="nav-item nav-link">Sign Up</li></Link>
                </ul>
              )}
          </div>
        </nav>
      </div>
    );

  }
}
