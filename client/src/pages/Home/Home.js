import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import API from "../../utils/API";
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
      <div>
     <Header/>
        <MyMapComponent >
          <GoogleMap {...MyMapComponent} />
        </MyMapComponent>
      </div>
    );
  }
}

export default Home;