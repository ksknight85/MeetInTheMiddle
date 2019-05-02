import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import API from "../../utils/API";
import "./Home.scss";
import LoginModal from "../../components/LoginModal"


class Home extends Component {

  state = {
    loggedIn: false,
  };

  componentDidMount() {
    this.loggedIn();
  }


  loggedIn = () => {
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

  render() {
    return (
      <div className="homeBox">
        {this.state.loggedIn ? (
          <Button onClick={e => { this.getJoke() }} color="warning" block>Get New Joke</Button>
        ) : (<></>)}

        <LoginModal />
      </div>
    );
  }
}

export default Home;