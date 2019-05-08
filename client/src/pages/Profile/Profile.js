import React, { Component } from "react";
import "./profile.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom"
import API from "../../utils/API"
import GoogleSuggest from "../../components/ProfileAddressSearch"

class Profile extends Component {
    state = {
        loggedIn: false,
        userId: null,
        loading: true,
        addresses: [],
        name: null,
        updater: 0
    }

    componentDidMount() {

        this.loading();

        API.isLoggedIn().then(user => {
            console.log(user.data.user)
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
        // console.log(this.props)

    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };

    loading() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000)
    }

    findAll = () => {
        // console.log(`find hit`)
        API.getAll(this.state.userId)
        .then(res=> {
            let addressArray=[];
            for (let i=0; i< res.data.length; i++) {
                addressArray.push({address: res.data[i].address, id: res.data[i]._id, update: false})
            }
            this.setState({addresses: addressArray})        
        })
        .catch(err=> console.log(err))
      }

      deleteAddress = (id) => {
        API.deleteAddress(id)
          .then(res => console.log("delete: please"))
          .catch(err => console.log("delete: no"))
            this.findAll()
      }

    updateAddress = (address) => {
        this.setState({updater: this.state.updater + 1})
        address.update = true;
    }

    refresher = (address) => {
        address.update=false
        this.setState({updater: this.state.updater + 1})
        
    }


    render() {
        return (
            <div className="profilePage">
                {/* {this.state.loggedIn ? ( */}
                <div className="profileBox">
                    {/* <h1 id="userTitle">Welcome {this.state.user.username}</h1> */}
                    <div className="container" id="profileContainer">
                        <h2 id="welcome">Welcome {this.state.name}</h2>
                        <h5 id="savedAddresses">Saved Addresses:</h5>
                        {/* <button type="submit" className="btn btn-warning" id="add"
                        // onClick = {() => {
                            
                        //         return (document.getElementById("profileContainier").appendChild(<GoogleSuggest />))
                            
                        // }}
                        >+ Add Another</button> */}
                        <GoogleSuggest new="new" />
                        {this.state.addresses.map(address => {
                            return ( 
                            <>
                            {address.update ? (<GoogleSuggest address={address.address} refresh={this.refresher} addressId={address.id}/>) : (
                                <div key={address.address} className="card">
                                    <div className="card-body">
                                        {address.address}
                                        <button type="submit" id="update" data-addressId={address.id} onClick={()=>this.updateAddress(address)} className="btn btn-warning"><u>Update</u></button>
                                        <button type="submit" id="delete" data-addressId={address.id} onClick={()=> this.deleteAddress(address.id)} className="btn btn-warning"><u>Delete</u></button>
                                    </div>
                                </div>
                            )}
                                {/* <div key={address.address} className="card">
                                <div className="card-body">
                                    {address.address}
                                    <button type="submit" id="update" data-addressId={address.id} className="btn btn-warning"><u>Update</u></button>
                                    <button type="submit" id="delete" data-addressId={address.id} onClick={()=> this.deleteAddress(address.id)} className="btn btn-warning"><u>Delete</u></button>
                                </div>
                            </div> */}
                            </>
                            )
                        })}
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