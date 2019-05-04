import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Container } from "reactstrap";
import API from "../../utils/API";
import LoginModal from "../../components/LoginModal"
import "./style.css";
import Header from "../../components/Header";
import MyMapComponent from '../../components/Map/MyMapComponent';
import { GoogleMap } from 'react-google-maps';
import GoogleSuggest from "../../components/AddressSearch"


class Home extends Component {

  state = {
    loggedIn: false,
    num: 2
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

  numAddresses = (event) => {
    event.preventDefault()
    const {name, value} = event.target
    this.setState({[name]: value})

  }

  generateMore = (num) => {
      if(num === 3) {
        return <GoogleSuggest/>
      } else if (num === 4) {
        return <><GoogleSuggest/> <GoogleSuggest/></>
      } else if (num === 5) {
        return <><GoogleSuggest/> <GoogleSuggest/> <GoogleSuggest/></>
      } else if (num === 2) {
        return
      }
  }

  render() {
    return (
      <div className="homeBox">
        <div>
          <Row><Header /></Row>
          <Row>
            <Col>
              <p>Type in 2-5 addresses to find a central meeting point:</p>
              <select value={this.state.num} onChange={this.numAddresses} name="num">
              <option>Add More?</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              <GoogleSuggest />
              <GoogleSuggest />
              {this.generateMore(parseInt(this.state.num))}
              <MyMapComponent >
                <GoogleMap {...MyMapComponent} />
              </MyMapComponent>
            </Col>
            <Col>Filters</Col>
          </Row>

        </div>
      </div>
    );
  }
}

export default Home;