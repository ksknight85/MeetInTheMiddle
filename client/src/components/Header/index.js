
import "./style.css"

import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: './assets/images/friends30.jpg',
    altText: 'Slide 1'
  },
  {
    src: './assets/images/friends23.jpg',
    altText: 'Slide 2'
  },
  {
    src: './assets/images/friends26.jpg',
    altText: 'Slide 3'
  },
  {
    src: './assets/images/friends17.jpg',
    altText: 'Slide 4'
  },
  {
    src: './assets/images/friends14.jpg',
    altText: 'Slide 5',
  },
  {
    src: './assets/images/friends11.jpg',
    altText: 'Slide 6',
  },
  {
    src: './assets/images/friends10.jpg',
    altText: 'Slide 7',
  },
  {
    src: './assets/images/friends31.jpg',
    altText: 'Slide 8',
  },
  {
    src: './assets/images/friends36.jpg',
    altText: 'Slide 9',
  },
  {
    src: './assets/images/friends16.jpg',
    altText: 'Slide 10',
  },
  {
    src: './assets/images/friends8.jpg',
    altText: 'Slide 11',
  },
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} id="image"/>
        </CarouselItem>
      );
    });

    return (
      <>
      <div id = "titleDiv" style={{zIndex: "100"}} className="shadow p-3 mb-5 bg-white rounded">
     <img id = "titleImage" src="./assets/images/MeetInTheMiddle6.png" alt="logo"/>
     <p id="byline">Meeting halfway has never been easier! Enter two or more addresses, the type of place you want to meet, and we’ll help you figure out exactly where to go.</p>
     </div>
      <Carousel
      className = "carousel"
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} /> */}
        {slides}
        {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} /> */}
      </Carousel>
      </>
    );
  }
}


export default Header;
