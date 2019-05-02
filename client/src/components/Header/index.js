import React from "react";
import "./style.css"

function Header() {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="5000">
    <div id="carousel-inner">
    <div id = "titleDiv" style={{zIndex: "100"}} class="shadow p-3 mb-5 bg-white rounded">
    <img id = "titleImage" src="./assets/images/MeetInTheMiddle6.png" alt="logo"/>
    <p id="byline">Meeting halfway has never been easier! Enter two or more addresses, the type of place you want to meet, and we’ll help you figure out exactly where to go.</p>
    </div>
      <div className="carousel-item active">
        <img className="d-block w-100" src="./assets/images/friends30.jpg" alt="First slide"/>
      </div>
      <div class="carousel-item">
        <img className="d-block w-100" src="./assets/images/friends23.jpg" alt="Second slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="./assets/images/friends26.jpg" alt="Third slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="./assets/images/friends22.jpg" alt="Third slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="./assets/images/friends14.jpg" alt="Third slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="./assets/images/friends11.jpg" alt="Third slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="./assets/images/friends10.jpg" alt="Third slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="./assets/images/friends31.jpg" alt="Third slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="./assets/images/friends36.jpg" alt="Third slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="./assets/images/friends16.jpg" alt="Third slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="./assets/images/friends8.jpg" alt="Third slide"/>
      </div>
    </div>
  </div>
  );
}

export default Header;
