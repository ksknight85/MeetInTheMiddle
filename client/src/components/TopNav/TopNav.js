import React, { Component } from "react";
import "./navbar.css";
import API from "../../utils/API";
import { Route, Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            loggedIn: false
        };
    }

    componentDidMount() {
        API.isLoggedIn().then(user => {
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true
                });
            }
        }).catch(err => {
            console.log(err);
        });
    }

    logout() {
        API.logout().then((data)=> {
            window.location.pathname = "/"
        }).catch((err)=> {
            console.log(err)
        })
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
    

            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <Link className="navbar-brand" to="#"><img src="./assets/images/MeetInTheMiddleSmall.png" alt="logo" height="40px" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {this.state.loggedIn ? (
                        <ul className="navbar-nav">
    
                            <Link to="/">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="#">Home<span className="sr-only">(current)</span></NavLink>
                                </li>
                            </Link>
                            <Link to="/search">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="#">Search</NavLink>
                                </li>
                            </Link>
                            <Link to="/profile">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="#">Profile</NavLink>
                                </li>
                            </Link>
                            <Link to="#">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="#">Logout</NavLink>
                                </li>
                            </Link>
                        </ul>
                    ) : (
                            <ul className="navbar-nav">
                                <Link to="/">
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="#">Home<span className="sr-only">(current)</span></NavLink>
                                    </li>
                                </Link>
                                <Link to="/search">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="#">Search</NavLink>
                                    </li>
                                </Link>
                                <Link to="/login">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="#">Login</NavLink>
                                    </li>
                                </Link>
                                <Link to="/signup">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="#">Sign Up</NavLink>
                                    </li>
                                </Link>
                            </ul>
                        )}
                </div>
            </nav>
        </div>
    );

}
}
