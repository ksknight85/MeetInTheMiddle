import React, { Component } from "react"
import { compose } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"
import API from "../../utils/API"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest"
import "./style.css"

const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {
  // console.log(props.markers)
  return (
    <GoogleMap defaultZoom={8} defaultCenter={props.currentLocation ? props.currentLocation : { lat: 0, lng: 0 }}>
      {/* {console.log(typeof(props.currentLocation))} */}
      {/* {console.log(`default loc ${defaultCenter}`)} */}

      {props.markers.map(marker => {
        const onClick = props.onClick.bind(this, marker)
        return (
          <Marker
            key={marker.id}
            onClick={onClick}
            position={{ lat: marker.lat, lng: marker.lng }}
          >
            {props.selectedMarker === marker &&
              <InfoWindow>
                <div>
                  {marker}
                </div>
              </InfoWindow>}

          </Marker>
        )
      })}
    </GoogleMap>
  )
})

export default class MyFancyComponent extends Component {
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
      radius: "5000",
      type: "restaurant"
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
  render() {
    var LatLng = {
      lat: parseFloat(this.state.chosenLat),
      lng: parseFloat(this.state.chosenLng)
    }

    return (
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
    )
  }
}

// FILTERS for location type & search radius
export class Filters extends Component {
  state = {
    typeSearch: "",
    placeId:"ChIJwXlO3HKKa4cR3ieDsbtuWLw",
    types: [],
    typeResult: [],
    radius: 10
  }

  componentDidMount() {
    API.details(this.state.placeId)
      .then(res => console.log("details", res.data.result.types))
      .catch(err => console.log(err))
  };

  handleInputChange = event => {
    this.setState({ typeSearch: event.target.value });
    this.setState({ radius: event.target.value })
  };

  handleFormSubmit = event => {
    event.preventDefault();

  };

  render() {
    return (
      <form className="filter">
        <div className="form-group">
          <label htmlFor="details">Location Type:</label>
          <input
            name="details"
            type="text"
            placeholder="Restaurant, Coffee Shop, ect."
            value={this.typeSearch}
            onChange={this.handleInputChange}
            // list=""
          
          />
          
          <datalist id="" >
          </datalist>
          <input
            name="radius"
            type="text"
            placeholder="Radius"
            value={this.radius}
            onChange={this.handleInputChange}
            // list=""
          />
              <datalist id="" >
          </datalist>
          <button type="submit">Search</button>
        </div>
      </form>
    )
  }
}
