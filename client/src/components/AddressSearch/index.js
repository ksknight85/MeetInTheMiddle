import React, { Component } from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest"
import "./style.css"
const MY_API_KEY = "AIzaSyCONkF6ans7kgeS5x--mxwLeMmH0aNJ3vE" // fake
 
export default class GoogleSuggest extends Component {
    state = {
        search: "",
        value: "",
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
    
    handleNoResult = () => {
        console.log('No results for ', this.state.search)
    }
 
    render() {
        const {search, value} = this.state
        return (
            <>
            <ReactGoogleMapLoader
                params={{
                    key: MY_API_KEY,
                    libraries: "places,geocode",
                }}
                render={googleMaps =>
                    googleMaps && (
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
                                <div className="customWrapper">
                                    {prediction
                                        ? prediction.description
                                        : "My custom no results text"}
                                </div>
                            )}
                        >
                            <input
                                type="text"
                                value={value}
                                placeholder="Search a location"
                                onChange={this.handleInputChange}
                            />
                        </ReactGooglePlacesSuggest>
                    )
                }
            />
            <button type="button" class="btn btn-warning">Save</button>
            <button type="button" class="btn btn-info">Select from Profile</button>
            </>
        )
    }
}