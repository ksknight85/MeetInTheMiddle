import React, { Component } from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest"
import API from "../../utils/API"
import "./style.css"
const MY_API_KEY = "AIzaSyCONkF6ans7kgeS5x--mxwLeMmH0aNJ3vE" // fake

export default class GoogleSuggest extends Component {
  state = {
    search: "",
    value: "",
    userAddress: [],
    loggedIn: false,
    userID: ""
  }

  loggedIn = () => {
    API.isLoggedIn().then(user => {
      console.log(user)
      if (user.data.loggedIn) {
        this.setState({
          loggedIn: true,
          username: user.data.user._id
        });
      }
    }).catch(err => {
      console.log("Not logged in");
    });
  }

  handleInputChange = e => {
    this.setState({ search: e.target.value, value: e.target.value })
    this.props.update(this.props.num, this.state.value)
  }

  handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
    // console.log(`suggested predictions:  \n${geocodedPrediction}\n\n ${originalPrediction}`) // eslint-disable-line
    this.props.update(this.props.num, geocodedPrediction.formatted_address);
    this.setState({ search: "", value: geocodedPrediction.formatted_address })
    this.props.coords(this.props.num, this.state.value);
  }
  postAddress = () => {

    API.postAddress(this.state.userId, { address: this.state.value })

      .then(res => console.log("post: success"))
      .catch(err => console.log("post: failed"))
  }

  findAll = () => {
    // console.log(`${this.props.num}'s search bar hit`)
    API.getAll(this.state.userId)
      .then(res => {
        let addressArray = [];
        for (let i = 0; i < res.data.length; i++) {
          addressArray.push(res.data[i].address)
        }
        this.setState({ userAddress: addressArray })
      })
      .catch(err => console.log(err))
  }

  handleNoResult = () => {
    console.log('No results for ', this.state.search)
  }

  saveSelect = (event) => {
    console.log(event)
  }

  selectAddress = (event) => {
    const value = event.target.value;
    this.setState({ search: value, value: value })
    this.props.update(this.props.num, value)
    this.props.coords(this.props.num, value)
  }

  componentDidMount() {
    this.loggedIn();
    API.isLoggedIn().then(user => {
      if (user.data.loggedIn) {
        this.setState({
          loggedIn: true,
          userId: user.data.user._id,
          name: user.data.user.username

        });
        this.findAll()
      }
    })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { search, value } = this.state
    return (
      <ReactGoogleMapLoader
        params={{
          key: MY_API_KEY,
          libraries: "places,geocode",
        }}
        render={googleMaps =>
          googleMaps && (
            <div className="input-bar">
              <div className="input-bar-item">
                <ReactGooglePlacesSuggest
                  googleMaps={googleMaps}
                  autocompletionRequest={{
                    input: search,
                    // Optional options
                    // https://developers.google.com/maps/documentation/javascript/reference?hl=fr#AutocompletionRequest
                  }}
                  // Optional props
                  onNoResult={this.handleNoResult}
                  onSelectSuggest={this.handleSelectSuggest}
                  textNoResults="My custom no results text" // null or "" if you want to disable the no results item
                  customRender={prediction => (
                    <div className="customWrapper input-group">
                      {prediction
                        ? prediction.description
                        : "My custom no results text"}
                    </div>
                  )}
                >
                  <input
                    className="form-control width100"
                    type="text"
                    value={value}
                    placeholder="Search a location"
                    onChange={this.handleInputChange}
                  />
                </ReactGooglePlacesSuggest>
                {this.state.loggedIn ? (
                  <button id="addSaveBtn" type="button" className="btn btn-warning" onClick={this.postAddress}>Save</button>) : (<></>)}
              </div>
              <div className="input-group">
                {this.state.loggedIn ? (<>
                  <select className="form-control" id="addrFromSaved " onChange={this.selectAddress} name="saved">
                    <option value="Choose from your saved addresses">Choose from your saved addresses</option>
                    {this.state.userAddress.map(address => {
                      return (<option value={address}>{address}</option>)
                    })}
                  </select>
                </>) : (<></>)}
              </div>
            </div>
          )
        }
      />
    )
  }
}