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
        userAddress: []
    }
    constructor(props) {
        super(props);
      }
 
    handleInputChange = e => {
        this.setState({search: e.target.value, value: e.target.value})
        this.props.update(this.props.num, this.state.value)
    }
 
    handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
        console.log(geocodedPrediction, originalPrediction) // eslint-disable-line
        this.props.update(this.props.num, geocodedPrediction.formatted_address);
        this.setState({search: "", value: geocodedPrediction.formatted_address})
        this.props.coords(this.props.num, this.state.value);

    }
    postAddress = () => {

        API.postAddress("5cce0e875424ec39408f60dd", {address: this.state.value})
    
          .then(res => console.log("post: please"))
          .catch(err => console.log("post: no"))
    }

    findAll = () => {
        console.log(`${this.props.num}'s search bar hit`)
        API.getAll("5ccdf7b418094b379059c35c")
        .then(res=> {
            let addressArray = [];
            for (let i =0; i < res.data.length; i++) {
                addressArray.push(res.data[i].address)
            }
            this.setState({userAddress: addressArray})
        })
        .catch(err=> console.log(err))
    }
    
    handleNoResult = () => {
        console.log('No results for ', this.state.search)
    }

    selectAddress = (event) => {
        // event.preventDefault();
        const value = event.target.value;
        this.setState({search: value, value: value})
    }

    componentDidMount() {
        console.log("did mount")
        this.findAll()
    }
 
    render() {
        const {search, value} = this.state
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
                                className= "form-control width100"
                                type="text"
                                value={value}
                                placeholder="Search a location"
                                onChange={this.handleInputChange}
                            />
                        </ReactGooglePlacesSuggest>
                        <span className="input-group-btn">
                        <button type="button" className="btn btn-warning" onClick={this.postAddress}>Save</button>
                    {/* <button type="button" className="btn btn-info">Select from Profile</button> */}
                    <select onChange={this.selectAddress} name="saved">
                        {this.state.userAddress.map(address=> {
                            return (<option value={address}>{address}</option>)
                        })}
                    </select>
                    </span>
                </div>
                </div>
                    )
                }
                
            />
        )
    }
}