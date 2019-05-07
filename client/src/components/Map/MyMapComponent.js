import React, { Component } from "react"
import API from "../../utils/API"
import "./style.css"
import "./SearchForm"
import MapWithAMarker from "./MapWithAMarker"
import { Col } from "reactstrap";
import Filters from "./Filters";
import GoogleSuggest from "../../components/AddressSearch"

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
      chosenLat: "",
      chosenLng: "",
      radius: "1600",
      type: "restaurant",
      num: 2,
    }
  }

  getAvgLat = () => {
    let latAverage;
    if (this.state.address1Coord && this.state.address2Coord && !this.state.address3Coord && !this.state.address4Coord && !this.state.address5Coord) {
      latAverage = (this.state.address1Coord.lat + this.state.address2Coord.lat) / 2
    } else if (this.state.address1Coord && this.state.address2Coord && this.state.address3Coord && !this.state.address4Coord && !this.state.address5Coord) {
      latAverage = ((this.state.address1Coord.lat + this.state.address2Coord.lat + this.state.address3Coord.lat) / 3)
    } else if (this.state.address1Coord && this.state.address2Coord && this.state.address3Coord && this.state.address4Coord && !this.state.address5Coord) {
      latAverage = ((this.state.address1Coord.lat + this.state.address2Coord.lat + this.state.address3Coord.lat + this.state.address4Coord.lat) / 4)
    } else if (this.state.address1Coord && this.state.address2Coord && this.state.address3Coord && this.state.address4Coord && this.state.address5Coord) {
      latAverage = ((this.state.address1Coord.lat + this.state.address2Coord.lat + this.state.address3Coord.lat + this.state.address4Coord.lat + this.state.address5Coord.lat) / 5)
    }
    this.setState({ chosenLat: latAverage.toString() })
  }

  getAvgLng = () => {
    let lngAverage;
    console.log("hit")
    if (this.state.address1Coord && this.state.address2Coord && !this.state.address3Coord && !this.state.address4Coord && !this.state.address5Coord) {
      lngAverage = (this.state.address1Coord.lng + this.state.address2Coord.lng) / 2
    } else if (this.state.address1Coord && this.state.address2Coord && this.state.address3Coord && !this.state.address4Coord && !this.state.address5Coord) {
      lngAverage = ((this.state.address1Coord.lng + this.state.address2Coord.lng + this.state.address3Coord.lng) / 3)
    } else if (this.state.address1Coord && this.state.address2Coord && this.state.address3Coord && this.state.address4Coord && !this.state.address5Coord) {
      lngAverage = ((this.state.address1Coord.lng + this.state.address2Coord.lng + this.state.address3Coord.lng + this.state.address4Coord.lng) / 4)
    } else if (this.state.address1Coord && this.state.address2Coord && this.state.address3Coord && this.state.address4Coord && this.state.address5Coord) {
      lngAverage = ((this.state.address1Coord.lng + this.state.address2Coord.lng + this.state.address3Coord.lng + this.state.address4Coord.lng + this.state.address5Coord.lng) / 5)
    }
    this.setState({ chosenLng: lngAverage.toString() })
  }


  getCoordinates = (boxNum, address) => {
    let num = "address" + boxNum + "Coord"
      API.coordinates(address)
        .then(data => {
          this.setState({[num]: data.data.results[0].geometry.location})
        })
        .catch(err=> console.log(err))
  }

  getPlaces = () => {
    API.places(this.state.type, this.state.chosenLat, this.state.chosenLng, this.state.radius)
      .then(data => {
        // console.log(data.data.results)
        const newArr = []
        for (let i = 0; i < 20; i++) {
          newArr.push(data.data.results[i].geometry.location)
        }
        // console.log("new Arrary", newArr)
        this.setState({ places: newArr })
        console.log(this.state.places)
      })
      // console.log(this.state.places)
  }

  // componentDidMount() {
  //   this.getCoordinates()
  //   this.getPlaces(this.state.chosenLat, this.state.chosenLng, this.state.radius, this.state.type)
  // }

  handleClick = (marker, event) => {
    event.preventDefault()
    // console.log({ marker })
    this.setState({ selectedMarker: marker })
  }
  numAddresses = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState({ [name]: value })

  }

  generateMore = (num) => {
    if (num === 3) {
      return <GoogleSuggest num={"3"} update={this.updateAddress} coords={this.getCoordinates} />
    } else if (num === 4) {
      return <><GoogleSuggest num={"3"} update={this.updateAddress} coords={this.getCoordinates} /> <GoogleSuggest num={"4"} update={this.updateAddress}  coords={this.getCoordinates} /></>
    } else if (num === 5) {
      return <><GoogleSuggest num={"3"} update={this.updateAddress} coords={this.getCoordinates} /> <GoogleSuggest num={"4"} update={this.updateAddress} coords={this.getCoordinates} /> <GoogleSuggest num={"5"} update={this.updateAddress} coords={this.getCoordinates} /></>
    } else if (num === 2) {
      return
    }
  }

  updateAddress = (boxNum,address) => {
    let num = "address" + boxNum
    this.setState({[num]: address})
  }
  
  render() {
    var LatLng = {
      lat: parseFloat(this.state.chosenLat),
      lng: parseFloat(this.state.chosenLng)
    }

    return (
      <>
          <Col>
            <p>Type in 2-5 addresses to find a central meeting point:</p>
            <select value={this.state.num} onChange={this.numAddresses} name="num">
              <option>Add More?</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <GoogleSuggest 
            num={"1"}
            update={this.updateAddress}
            coords={this.getCoordinates}
            />
            <GoogleSuggest 
            num={"2"}
            update={this.updateAddress}
            coords={this.getCoordinates}
            />
            {this.generateMore(parseInt(this.state.num))}
            <MapWithAMarker
              selectedMarker={this.state.selectedMarker}
              markers={this.state.places}
              onClick={this.handleClick}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCONkF6ans7kgeS5x--mxwLeMmH0aNJ3vE&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              key={this.state.selectedMarker}
              currentLocation={LatLng}
            />
          </Col>
          <Col>
            <p>Filter your results</p>
            <Filters
              type={this.state.type}
              radius={this.state.radius}
              />
              <button onClick={this.getAvgLng && this.getAvgLat}>Average and list</button>
          </Col>
      </>
    )
  }
}

export default MyFancyComponent;

