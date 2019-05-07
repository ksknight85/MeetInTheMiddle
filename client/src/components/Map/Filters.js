import React from "react"
import "./style.css"


function Filters(props) {
  // handleTypeChange = event => {
  //   this.setState({ typeSearch: event.target.value });
  // };
  // handleRadiusChange = event => {
  //   this.setState({ radius: event.target.value })
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  // };

  return (
    <>
      <form className="search">
        <div className="form-group">

          <label htmlFor="types">Search Location Type:</label>
          <select
            // value={props.typeSearch}
            // onChange={props.handleTypeChange}
            name="types"
            type="text"
            className="form-control"
            placeholder="Restaurant, Cafe"
            id="types"
            list="types"
          >
            <option>airport</option>
            <option>amusement_park</option>
            <option>aquarium</option>
            <option>art_gallery</option>
            <option>bakery</option>
            <option>bar</option>
            <option>beauty_salon</option>
            <option>book_store</option>
            <option>bowling_alley</option>
            <option>cafe</option>
            <option>campground</option>
            <option>casino</option>
            <option>church</option>
            <option>clothing_store</option>
            <option>electronics_store</option>
            <option>florist</option>
            <option>furniture_store</option>
            <option>gym</option>
            <option>hair_care</option>
            <option>hardware_store</option>
            <option>home_goods_store</option>
            <option>jewelry_store</option>
            <option>library</option>
            <option>liquor_store</option>
            <option>lodging</option>
            <option>mosque</option>
            <option>movie_theater</option>
            <option>museum</option>
            <option>night_club</option>
            <option>park</option>
            <option>pet_store</option>
            <option>restaurant</option>
            <option>school</option>
            <option>shoe_store</option>
            <option>shopping_mall</option>
            <option>spa</option>
            <option>stadium</option>
            <option>store</option>
            <option>supermarket</option>
            <option>synagogue</option>
            <option>zoo</option>
          </select>

          <label htmlFor="radius">Adjust Radius:</label>
          <select
            // value={props.radius}
            // onChange={props.handleRadiusChange}
            name="radius"
            type="text"
            className="form-control"
            placeholder="10 mi "
            id="radius"
          >
            <option value={5}>5 mi</option>
            <option value={10}>10 mi</option>
            <option value={15}>15 mi</option>
            <option value={25}>20 mi</option>
          </select>

          <button type="submit"  className="btn btn-success" onClick={props.handleFormSubmit}>
            Search
          </button>
        </div>
      </form>
    </>
  )
}


export default Filters;
