import React from 'react';
// import Modal from 'react-modal';
import { Col, Row } from "reactstrap";
import "./Modal.css"
import Modal from 'react-responsive-modal'

export default class ModalExample extends React.Component {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal} id="instructions">How does it work?</button>
        <Modal open={open} onClose={this.onCloseModal} center>
        <h1 ref={subtitle => this.subtitle = subtitle} id="how" style={{color: "black"}}>How does it work?</h1>
          <Row id="explanationRow">
             <Col md="6">
               <img id="modalImg" src="../assets/images/screenshot2.png" style={{width: "100%", height: "100%"}}></img>
             </Col>
             <Col md="6">
               <div class="description">
                 <p class="description">Have you ever wanted to go to dinner with a group of friends but have struggled to find a central location? <br></br>Now you can!</p>
                 <p class="description">Enter up to five addresses and quickly determine the best place to Meet in the Middle. You can filter your search by selecting a specific location type or adjusting the search radius.</p>
               </div>
             </Col>
           </Row>
           <Row id="exampRow">
             <Col md="auto">
               <p class="modalExamp"><i class="fas fa-utensils" style={{fontSize: "60px"}}></i><br></br>Search for a central dinner location to meet friends</p>
             </Col>
             <Col md="auto">
               <p class="modalExamp"><i class="fas fa-book-open"style={{fontSize: "60px"}}></i><br></br>Find an easy spot to meet up with a study group</p>
             </Col>
             <Col md="auto">
               <p class="modalExamp"><i class="fas fa-tree" style={{fontSize: "60px"}}></i><br></br>Locate a park for a playdate or BBQ with family</p>
             </Col>
             <Col md="auto">
               <p class="modalExamp"><i class="fas fa-coffee" style={{fontSize: "60px"}}></i><br></br>Pick the perfect cafe for a business meeting</p>
             </Col>
           </Row>
        </Modal>
      </div>
    );
  }
}
