import React, { Component } from "react";
import { Row } from "reactstrap";
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
  findPlace = () => {
    API.places("cafe", "39.740880", "-104.981930", "5000")
      .then(res=> console.log(res))
      .catch(err => console.log(`error: \n ${err}`))
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
        <span onClick={this.deleteAddress}>delete</span>{"-----------------"}
        <span onClick={this.findAll}>find</span>{"------------------"}
        <span onClick={this.findPlace}>places?</span> 

        <div>
          <Row><Header /></Row>
          <Row>
            <MyMapComponent >
              <GoogleMap {...MyMapComponent} />
            </MyMapComponent>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;