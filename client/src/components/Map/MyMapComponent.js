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
      chosenLat: "39.70922",
      chosenLng: "-104.980389",
      radius: "1600",
      type: "restaurant",
      num: 2,
    }
  }

  getAvgLat = () => {
    let latAverage = 1
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
    let lngAverage = 1
    if (this.state.address1Coord && this.state.address2Coord && !this.state.address3Coord && !this.state.address4Coord && !this.state.address5Coord) {
      lngAverage = (this.state.address1Coord.lng + this.state.address2Coord.lng) / 2
    } else if (this.state.address1Coord && this.state.address2Coord && this.state.address3Coord && !this.state.address4Coord && !this.state.address5Coord) {
      lngAverage = ((this.state.address1Coord.lng + this.state.address2Coord.lng + this.state.address3Coord.lng) / 3)
    } else if (this.state.address1Coord && this.state.address2Coord && this.state.address3Coord && this.state.address4Coord && !this.state.address5Coord) {
      lngAverage = ((this.state.address1Coord.lng + this.state.address2Coord.lng + this.state.address3Coord.lng + this.state.address4Coord.lng) / 4)
    } else if (this.state.address1Coord && this.state.address2Coord && this.state.address3Coord && this.state.address4Coord && this.state.address5Coord) {
      lngAverage = ((this.state.address1Coord.lng + this.state.address2Coord.lng + this.state.address3Coord.lng + this.state.address4Coord.lng + this.state.address5Coord.lng) / 5)
    }
    this.setState({ chosenLat: lngAverage.toString() })
  }

  getCoordinates = (address1, address2, address3, address4, address5) => {
    API.coordinates(address1)
      .then(data => {
        this.setState({ address1Coord: data.data.results[0].geometry.location })
        // console.log(this.state.address1Coord)
      })
      .catch(err => console.log(err))
    API.coordinates(address2)
      .then(data => {
        this.setState({ address2Coord: data.data.results[0].geometry.location })

        // console.log(this.state.address2Coord)

      })
      .catch(err => console.log(err))
    if (address3) {
      API.coordinates(address3)
        .then(data => {
          this.setState({ address3Coord: data.data.results[0].geometry.location })
          console.log(this.state.address3Coord)
        })
        .catch(err => console.log(err))
    }
    if (address4) {
      API.coordinates(address4)
        .then(data => {
          this.setState({ address4Coord: data.data.results[0].geometry.location })
          console.log(this.state.address4Coord)
        })
        .catch(err => console.log(err))
    }
    if (address5) {
      API.coordinates(address5)
        .then(data => {
          this.setState({ address5Coord: data.data.results[0].geometry.location })
          console.log(this.state.address5Coord)
        })
        .catch(err => console.log(err))
    }
  }

  getPlaces = (lat, lng, radius, type) => {
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

  componentDidMount() {
    this.getCoordinates()
    this.getPlaces(this.state.chosenLat, this.state.chosenLng, this.state.radius, this.state.type)
  }

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
      return <GoogleSuggest />
    } else if (num === 4) {
      return <><GoogleSuggest /> <GoogleSuggest /></>
    } else if (num === 5) {
      return <><GoogleSuggest /> <GoogleSuggest /> <GoogleSuggest /></>
    } else if (num === 2) {
      return
    }
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
          <GoogleSuggest />
          <GoogleSuggest />
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
        </Col>
      </>
    )
  }
}

export default MyFancyComponent;

