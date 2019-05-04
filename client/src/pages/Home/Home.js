import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "reactstrap";
import API from "../../utils/API";
import "./style.css";
import Header from "../../components/Header";
import MyMapComponent, { Filters } from '../../components/Map/MyMapComponent';
import { GoogleMap } from 'react-google-maps';



class Home extends Component {

  state = {
    loggedIn: false,
  };

  componentDidMount() {
    this.loggedIn();
  }

  // revist this it does not hit either the .then or .catch but it does post the address
  postAddress = () => {
    API.postAddress("5ccc802bf3ad93291ca770aa", {address: "123 blah st"})
      .then(res => console.log("post: please"))
      .catch(err => console.log("post: no"))
  }
  deleteAddress = () => {
    API.deleteAddress("5ccca3597b8ad51988f6e788")
      .then(res => console.log("delete: please"))
      .catch(err => console.log("delete: no"))
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
        <span onClick={this.postAddress}>save</span> {"--------------------"}
        <span onClick={this.deleteAddress}>delete</span>

        <div>
          <Row><Header /></Row>
          <Row>
            <Col>
              <p>Type in 2-5 addresses to find a central meeting point:</p>
              <MyMapComponent >
                <GoogleMap {...MyMapComponent} />

              </MyMapComponent>
            </Col>
            <Col>Filter your results</Col>
            <Filters></Filters>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;