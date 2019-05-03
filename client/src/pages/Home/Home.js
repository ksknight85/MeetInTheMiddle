import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import API from "../../utils/API";

import LoginModal from "../../components/LoginModal"

import "./style.css";
import Header from "../../components/Header";
import MyMapComponent from '../../components/Map/MyMapComponent';
import { GoogleMap } from 'react-google-maps';



class Home extends Component {

  state = {
    loggedIn: false,
  };

  componentDidMount() {
    this.loggedIn();
  }
  postAddress = () => {
    API.postAddress("5ccc802bf3ad93291ca770aa", {address: "123 blah st"})
      .then(res => console.log("here"))
      .catch(err => console.log("no"))
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
        <span onClick={this.postAddress}>fkdsjfdklfds</span>
        {/* <LoginModal /> */}
      
     <Header/>
        <MyMapComponent >
          <GoogleMap {...MyMapComponent} />
        </MyMapComponent>

      </div>
    );
  }
}

export default Home;