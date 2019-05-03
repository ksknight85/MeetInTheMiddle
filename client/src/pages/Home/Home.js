import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "reactstrap";
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
      <div className="homeBox">
        <div>
          <Row><Header /></Row>
          <Row>
            <Col>
              <p>Type in 2-5 addresses to find a central meeting point:</p>
              <MyMapComponent >
                <GoogleMap {...MyMapComponent} />

              </MyMapComponent>
            </Col>
            <Col>2 of 2</Col>
          </Row>

        </div>
      </div>
    );
  }
}

export default Home;