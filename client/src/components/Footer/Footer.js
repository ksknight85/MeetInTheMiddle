import React from "react";
import "./style.css";
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <footer className="footer mt-auto py-3" id="Footer" style={{padding: "0px"}}>
            <i className="fab fa-react react-icon"></i>Copywright© Jenn, Dylan, Haley, Kevin
            <Link id="github" to="https://github.com/ksknight85/MeetInTheMiddle" target="blank"><i className="fab fa-github gh-icon"></i></Link>
        </footer>
    )
}

export default Footer;