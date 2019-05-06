import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Container } from "reactstrap";
import API from "../../utils/API";
import LoginModal from "../../components/LoginModal"
import "./style.css";
import Header from "../../components/Header";
import MyMapComponent, { Filters } from '../../components/Map/MyMapComponent';
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

  // revist this it does not hit either the .then or .catch but it does post the address
  postAddress = () => {
    API.postAddress("5ccdf7b418094b379059c35c", {address: "123456 blah st"})
      .then(res => console.log("post: please"))
      .catch(err => console.log("post: no"))
  }
  deleteAddress = () => {
    API.deleteAddress("5ccdf7b418094b379059c35c")
      .then(res => console.log("delete: please"))
      .catch(err => console.log("delete: no"))
  }
  findAll = () => {
    API.getAll("5ccdf7b418094b379059c35c")
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
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
        <span onClick={this.postAddress}>save</span> {"--------------------"}
        <span onClick={this.deleteAddress}>delete</span>{"-----------------"}
        <span onClick={this.findAll}>find</span>

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
            <Col>
            <p>Filter your results</p>
            <Filters></Filters>
            </Col>

          </Row>
        </div>
      </div>
    );
  }
}

export default Home;