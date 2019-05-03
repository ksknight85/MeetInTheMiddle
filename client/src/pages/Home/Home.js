import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Container } from "reactstrap";
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
        <Row>
          <LoginModal className="homeBox" />
        </Row>
        <Row><Header/></Row>
        <Container id="mainBody">
        <Row>
          <Col>
            <p id="addressInstructions">Type in 2-5 addresses to find a central meeting point:</p>
            <MyMapComponent >
              <GoogleMap {...MyMapComponent} />
            </MyMapComponent>
          </Col>
          <Col>
          <p id="filterTitle">Filters</p>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default Home;