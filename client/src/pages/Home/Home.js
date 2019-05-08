import React, { Component } from "react";
import { Row } from "reactstrap";
import API from "../../utils/API";
import "./style.css";
import Header from "../../components/Header";
import ModalExample from "../../components/Modal/Modal.js"


class Home extends Component {

  state = {
    loggedIn: false,
    userID: ""
  };

  componentDidMount() {
    this.loggedIn();
  }

  // revist this it does not hit either the .then or .catch but it does post the address
  postAddress = () => {
    API.postAddress("5cd1d3e6916a24284884d8c4", { address: "123456 fake st" })
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
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }
  findPlace = () => {
    API.places("cafe", "39.740880", "-104.981930", "5000")
      .then(res => console.log(res))
      .catch(err => console.log(`error: \n ${err}`))
  }

  findDetails = () => {
    API.details("ChIJwXlO3HKKa4cR3ieDsbtuWLw")
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  loggedIn = () => {
    API.isLoggedIn().then(user => {
      console.log(user)
      if (user.data.loggedIn) {
        this.setState({
          loggedIn: true,
          username: user.data.user._id
        });
        console.log(`User: data ${user.data}`);
      }
    }).catch(err => {
      console.log("Not logged in");
    });
  }




  render() {
    return (
      <>
        <ModalExample show={true} closeOnOuterClick={true} />
        <Row><Header /></Row>
      </>
    );
  }
}

export default Home;