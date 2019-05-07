import React, { Component } from "react";
import "./profile.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom"
import API from "../../utils/API"
import GoogleSuggest from "../../components/AddressSearch"

class Profile extends Component {
    state = {
        loggedIn: false,
        user: null,
        loading: true
    }

    componentDidMount() {

        this.loading();

        API.isLoggedIn().then(user => {
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true,
                    user: user.data.user
                });
            }
        }).catch(err => {
            console.log(err);
        });

        console.log(this.props)
    }

    loading() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000)
    }

    render() {
        return (
            <div className="profilePage">
                {/* {this.state.loggedIn ? ( */}
                <div className="profileBox">
                    {/* <h1 id="userTitle">Welcome {this.state.user.username}</h1> */}
                    <div className="container" id="profileContainer">
                        <h2 id="welcome">Welcome</h2>
                        <h5 id="savedAddresses">Saved Addresses:</h5>
                        <button type="submit" class="btn btn-warning" id="add"
                        onClick = {() => <GoogleSuggest/>}
                        >+ Add Another</button>
                        <div class="card">
                            <div class="card-body">
                                405 S Pearl St, Denver, CO 80209
                                <button type="submit" id="update" class="btn btn-warning"><u>Update</u></button>
                                <button type="submit" id="delete" class="btn btn-warning"><u>Delete</u></button>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                1269 N Logan St, Denver, CO 80203
                                <button type="submit" id="update" class="btn btn-warning"><u>Update</u></button>
                                <button type="submit" id="delete" class="btn btn-warning"><u>Delete</u></button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ) : (
                    <div className="noUser">
                        {!this.state.loading ? (
                            <>
                                <h1>please log in</h1>
                                <Link className="loginLink" to="/login"><Button className="loginBtn" color="info" block>Login</Button></Link>
                            </>
                        ) : (
                            <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading"/>
                        )}
                    </div> 
                )} */}
            </div>
        )
    }
}


export default Profile;