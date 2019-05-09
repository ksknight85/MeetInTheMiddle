import React, { Component } from "react";
import "./profile.css";
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
            .then(res => console.log("delete: success"))
            .catch(err => console.log("delete: fail"))
        this.findAll()
    }

    updateAddress = (address) => {
        this.setState({updater: this.state.updater + 1})
        address.update = true;
    }



    render() {
        return (
            <div className="profilePage">
                <div className="profileBox">
                    <div className="container" id="profileContainer">
                        <h2 id="welcome">Welcome {this.state.name}</h2>
                        <h5 id="savedAddresses">Saved Addresses:</h5>
                        <GoogleSuggest refresh={this.findAll} new="new" />
                        {this.state.addresses.map(address => {
                            return ( 
                            <>
                            {address.update ? (<GoogleSuggest address={address.address} refresh={this.findAll} addressId={address.id}/>) : (
                                <div key={address.address} thingy={this.state.updater} className="card">
                                    <div className="card-body">
                                        {address.address}
                                        <button type="submit" id="update" data-addressId={address.id} onClick={()=>this.updateAddress(address)} className="btn btn-warning"><u>Update</u></button>
                                        <button type="submit" id="delete" data-addressId={address.id} onClick={()=> this.deleteAddress(address.id)} className="btn btn-warning"><u>Delete</u></button>
                                    </div>
                                </div>
                            )}
                            </>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}


export default Profile;