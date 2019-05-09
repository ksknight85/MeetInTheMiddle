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
    constructor(props) {
        super(props);
    }

    loggedIn = () => {
        API.isLoggedIn().then(user => {
            console.log(user)
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true,
                    username: user.data.user._id
                });
                console.log(`User: data ${user.data}`);
            }
        }).catch(err => {
            console.log("Not logged in");
        });
    }

    handleInputChange = e => {
        this.setState({ search: e.target.value, value: e.target.value })
    }

    handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
        this.setState({ search: "", value: geocodedPrediction.formatted_address })


    }
    postAddress = () => {

        API.postAddress(this.state.userId, { address: this.state.value })

            .then(res => console.log("post: please"))
            .catch(err => console.log("post: no"))
        this.props.refresh()
    }

    updateAddress = () => {
        let updateId = this.props.addressId
        let place = this.state.value
        // console.log(place)
        API.updateAddress(updateId, place)
            .then(console.log(this))
        this.props.refresh()
    }


    handleNoResult = () => {
        console.log('No results for ', this.state.search)
    }

    selectAddress = (event) => {
        // event.preventDefault();
        const value = event.target.value;
        this.setState({ search: value, value: value })
    }

    componentDidMount() {
        // console.log("did mount")
        API.isLoggedIn().then(user => {
            console.log(user.data.user)
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true,
                    userId: user.data.user._id,
                    name: user.data.user.username

                });
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
                                className= "form-control width100"
                                type="text"
                                value={this.state.value === ""? this.props.address : this.state.value}
                                placeholder="Search a location"
                                onChange={this.handleInputChange}
                            />
                        </ReactGooglePlacesSuggest>
                        <span className="input-group-btn">
                        <button type="button" className="btn btn-warning" onClick={this.props.new === "new" ? this.postAddress : this.updateAddress}>Save</button>
                    {/* <button type="button" className="btn btn-info">Select from Profile</button> */}
                    </span>
                </div>
                </div>
                    )
                }
            />
        )
    }
}