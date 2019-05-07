import React from "react";
import "./style.css";
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <footer className="footer mt-auto py-3" id="Footer">
            <p><i className="fab fa-react react-icon"></i></p>
            <p>Copywright© Jenn, Dylan, Haley, Kevin </p>
            <p><Link id="github" to="https://github.com/ksknight85/MeetInTheMiddle" target="blank"><i className="fab fa-github gh-icon"></i></Link></p>
        </footer>
    )
}

export default Footer;