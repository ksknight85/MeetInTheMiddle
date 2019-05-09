import React from "react";
import { Row } from "reactstrap";
import "./style.css";
import Header from "../../components/Header";
import ModalExample from "../../components/Modal/Modal.js"

function Home(props) {
  return (
    <>
      <ModalExample show={true} closeOnOuterClick={true} />
      <Row><Header /></Row>
    </>
  );
}


export default Home;