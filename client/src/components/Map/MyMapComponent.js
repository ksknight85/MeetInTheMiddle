import React, { Component } from "react"
import API from "../../utils/API"
import "./style.css"

import MapWithAMarker from "./MapWithAMarker"
import { Col, Row } from "reactstrap";
import Filters from "./Filters";
import GoogleSuggest from "../../components/AddressSearch"
import DetailCards from "../../components/DetailCards/DetailCards.js"

let placesIDs = []
// let LatLng = {lat: 39.7392, lng: -104.9903}

class MyFancyComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      places: [],
      selectedMarker: false,
      address1Coord: false,
      address2Coord: false,
      address3Coord: false,
      address4Coord: false,
      address5Coord: false,
      address1: false,
      address2: false,
      address3: false,
      address4: false,
      address5: false,
      chosenLat: false,
      chosenLng: false,
      radius: "",
      type: "",
      num: 2,
      placeID: placesIDs,
      details: [],
      LatLng: {lat: 39.7392, lng: -104.9903}
    }
  }

  
  getAvg = () => {
    var latAverage;
    var lngAverage;
   
    if (this.state.address1Coord && this.state.address2Coord && !this.state.address3Coord && !this.state.address4Coord && !this.state.address5Coord) {
      latAverage = (this.state.address1Coord.lat + this.state.address2Coord.lat) / 2
    } else if (this.state.address1Coord && this.state.address2Coord && this.state.address3Coord && !this.state.address4Coord && !this.state.address5Coord) {
      latAverage = ((this.state.address1Coord.lat + this.state.address2Coord.lat + this.state.address3Coord.lat) / 3)
    } else if (this.state.address1Coord && this.state.address2Coord && this.state.address3Coord && this.state.address4Coord && !this.state.address5Coord) {
      latAverage = ((this.state.address1Coord.lat + this.state.address2Coord.lat + this.state.address3Coord.lat + this.state.address4Coord.lat) / 4)
    } else if (this.state.address1Coord && this.state.address2Coord && this.state.address3Coord && this.state.address4Coord && this.state.address5Coord) {
      latAverage = ((this.state.address1Coord.lat + this.state.address2Coord.lat + this.state.address3Coord.lat + this.state.address4Coord.lat + this.state.address5Coord.lat) / 5)
    }
  
    if (this.state.address1Coord && this.state.address2Coord && !this.state.address3Coord && !this.state.address4Coord && !this.state.address5Coord) {
      lngAverage = (this.state.address1Coord.lng + this.state.address2Coord.lng) / 2
    } else if (this.state.address1Coord && this.state.address2Coord && this.state.address3Coord && !this.state.address4Coord && !this.state.address5Coord) {
      lngAverage = ((this.state.address1Coord.lng + this.state.address2Coord.lng + this.state.address3Coord.lng) / 3)
    } else if (this.state.address1Coord && this.state.address2Coord && this.state.address3Coord && this.state.address4Coord && !this.state.address5Coord) {
      lngAverage = ((this.state.address1Coord.lng + this.state.address2Coord.lng + this.state.address3Coord.lng + this.state.address4Coord.lng) / 4)
    } else if (this.state.address1Coord && this.state.address2Coord && this.state.address3Coord && this.state.address4Coord && this.state.address5Coord) {
      lngAverage = ((this.state.address1Coord.lng + this.state.address2Coord.lng + this.state.address3Coord.lng + this.state.address4Coord.lng + this.state.address5Coord.lng) / 5)
    }

    this.setState({ chosenLng: lngAverage, chosenLat: latAverage }, () => this.getPlaces())

  }

  getCoordinates = (boxNum, address) => {
    let num = "address" + boxNum + "Coord"
    API.coordinates(address)
      .then(data => {
        this.setState({ [num]: data.data.results[0].geometry.location })
      })
      .catch(err => console.log(err))
  }


  getPlaces = () => {
    API.places(this.state.type, this.state.chosenLat, this.state.chosenLng, this.state.radius)
      .then(data => {
        console.log("TEST TEST TEST TEST", data)
        const newArr = []
        for (let i = 0; i<data.data.results.length && i < 20; i++) {
          newArr.push({ place: data.data.results[i].geometry.location, id: data.data.results[i].place_id })
          placesIDs.push(data.data.results[i].place_id)
        }
        this.setState({ places: newArr })
        this.setState({ placeID: placesIDs })
        this.setState({details: data.data.results})
        console.log("DATA: ", this.state.details)
      }).then(() => {
        this.setState({LatLng: {lat: this.state.chosenLat, lng: this.state.chosenLng}})
      })
  }

  moveCard = () => {
    let newArr = this.state.details
      for (var i=0; i < newArr.length; i++) {
        if (this.state.selectedMarker === newArr[i].reference) {
            var a = newArr.splice(i,1);   // removes the item
            newArr.unshift(a[0]);         // adds it back to the beginning
            break;
        }
    }
    this.setState({details: newArr})
    }
  

  handleClick = (event, marker) => {
    if (event && event.preventDefault) {
      event.preventDefault()
    }
    this.setState({ selectedMarker: marker })
    console.log("Selected Marker", this.state.selectedMarker)
    this.moveCard()

  }
  numAddresses = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  generateMore = (num) => {
    if (num === 3) {
      return <GoogleSuggest num={"3"} update={this.updateAddressInState} coords={this.getCoordinates} />
    } else if (num === 4) {
      return <><GoogleSuggest num={"3"} update={this.updateAddressInState} coords={this.getCoordinates} /> <GoogleSuggest num={"4"} update={this.updateAddressInState} coords={this.getCoordinates} /></>
    } else if (num === 5) {
      return <><GoogleSuggest num={"3"} update={this.updateAddressInState} coords={this.getCoordinates} /> <GoogleSuggest num={"4"} update={this.updateAddressInState} coords={this.getCoordinates} /> <GoogleSuggest num={"5"} update={this.updateAddressInState} coords={this.getCoordinates} /></>
    } else if (num === 2) {
      return
    }
  }

    handleFormSubmit = async (event) => {
      event.preventDefault()
      this.getAvg()
  }


  updateAddressInState = (boxNum,address) => {
    let num = "address" + boxNum
    this.setState({ [num]: address })
  }

  handleRadiusTypeChange = event => {
    event.preventDefault();
    const name = event.target.name
    const value = event.target.value
    this.setState({ [name]: value });
  };


  render() {

    return (
      <div className="main">
        <Row>
          <Col id="column">
            <p id="subtitle">Type in 2-5 addresses to find a central meeting point:</p>
            <select value={this.state.num} onChange={this.numAddresses} name="num" id="selectNum">
              <option>Add More?</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <GoogleSuggest
              num={"1"}
              update={this.updateAddressInState}
              coords={this.getCoordinates}
            />
            <GoogleSuggest
              num={"2"}
              update={this.updateAddressInState}
              coords={this.getCoordinates}
            />
            {this.generateMore(parseInt(this.state.num))}
          </Col>
          <Col id="column">
            <p id="subtitle2">Filter your results:</p>
            <Filters
              type={this.state.type}
              radius={this.state.radius}
              handleRadiusTypeChange={this.handleRadiusTypeChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
        </Row>

        <Row>
          <Col id="mapDiv">
            <MapWithAMarker
              selectedMarker={this.state.selectedMarker}
              markers={this.state.places}
              onClick={this.handleClick}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCONkF6ans7kgeS5x--mxwLeMmH0aNJ3vE&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              key={this.state.selectedMarker}
              currentLocation={this.state.LatLng}
            />
          </Col>
          <Col id="detailCol">
         {this.state.details.length ? 
         this.state.details.map((detail) => (
          <DetailCards details={detail} selectedThing={this.state.selectedMarker}/> 
         ))
         : 'Add 2 or more addresses, select a location type and radius, then click "Search".'}
          </Col>
        </Row>
        {/* <Row>
        <button onClick={this.getAvgLng && this.getAvgLat}>Average and list</button>
        </Row> */}
      </div>
    )
  }
}

export default MyFancyComponent;

