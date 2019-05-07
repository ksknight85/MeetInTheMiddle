import React, { Component } from "react"
import "./style.css";
import SearchForm from"./SearchForm"



export class Filters extends Component {
    state = {
      typeSearch: "",
      placeId:"ChIJwXlO3HKKa4cR3ieDsbtuWLw",
      radius: 10
    }
    handleTypeChange = event => {
      this.setState({ typeSearch: event.target.value });
    };
    handleRadiusChange = event => {
      this.setState({ radius: event.target.value })
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
    };
    
    render() {
      return (
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleTypeChange={this.handleTypeChange}
              handleRadiusChange={this.handleRadiusChange}
              types={this.type}
            />
      )
    }
  }

  export default Filters;
  