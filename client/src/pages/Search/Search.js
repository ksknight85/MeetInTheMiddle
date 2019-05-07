import React, { Component } from "react";
import "./style.css";
import MyMapComponent from '../../components/Map/MyMapComponent';
import { GoogleMap } from 'react-google-maps';


class Search extends Component {


  render() {
    return (
      <MyMapComponent >
        <GoogleMap {...MyMapComponent} />
      </MyMapComponent>
    );
  }
}

export default Search;