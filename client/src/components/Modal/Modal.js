
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Col, Row } from "reactstrap";
import "./Modal.css"


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '75%',
    backgroundImage: 'url("https://s3.amazonaws.com/spoonflower/public/design_thumbnails/0257/4086/rrherringbone_grey.ai_mirror.png")',

  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement')

class ModalExample extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#ffffff';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal} className="instructions">How does it work?</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h1 ref={subtitle => this.subtitle = subtitle} style={customStyles} id="how">How does it work?</h1>

          <Row>
            <Col md="4">
              <img id="modalImg" src="http://geniussys.com/img/placeholder/blogposts-300x220.png"></img>
            </Col>
            <Col md="7">
              <div class="description">
                <p class="description">Have you ever wanted to go to dinner with a group of friends but struggled to find a central location? <br></br>Now you can!</p>
                <p class="description">Enter up to five addresses and quickly determine the best place to Meet in the Middle. You can filter your search by selecting a specific location type or adjusting the search radius.</p>
              </div>
            </Col>
          </Row>

          <Row id="exampRow">
            <Col md="auto">
              <p class="modalExamp">Search for a central dinner location to meet friends</p>
            </Col>
            <Col md="auto">
              <p class="modalExamp">Find an easy spot to meet up with a study group</p>
            </Col>
            <Col md="auto">
              <p class="modalExamp">Locate a park for a playdate or BBQ with family</p>
            </Col>
            <Col md="auto">
              <p class="modalExamp">Pick the perfect cafe for a business meeting</p>
            </Col>
          </Row>

          <button id="closeBtn" onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}

export default ModalExample

// {/* <div>I am a modal</div>
// <form>
//   <input />
//   <button>tab navigation</button>
//   <button>stays</button>
//   <button>inside</button>
//   <button>the modal</button>
// </form> */}

{/* <Col>
<p class="modalExamp">Locate a park for a playdate or BBQ with family</p>
</Col> */}