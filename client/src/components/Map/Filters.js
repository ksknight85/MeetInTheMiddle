import React from "react"
import "./style.css"


function Filters(props) {
  console.log(`filter props ${props.handleRadiusTypeChange}`)
  return (
    <>
          <div className="form-group">
          <div className="form-group-type">
            <select
              value={props.type}
              onChange={props.handleRadiusTypeChange}
              name="type"
              type="text"
              className="form-control"
            >
              <option>Search a location Type</option>
              <option value="airport">Airport</option>
              <option value="amusement_park">Amusement Park</option>
              <option value="aquarium">Aquarium</option>
              <option value="art_gallery">Art Gallery</option>
              <option value="bakery">Bakery</option>
              <option value="bar">Bar</option>
              <option value="beauty_salon">Beauty Salon</option>
              <option value="book_store">Book Store</option>
              <option value="bowling_alley">Bowling Alley</option>
              <option value="cafe">Cafe</option>
              <option value="campground">Campground</option>
              <option value="casino">Casino</option>
              <option value="church">Church</option>
              <option value="clothing_store">Clothing Store</option>
              <option value="electronics_store">Electronics Store</option>
              <option value="florist">Florist</option>
              <option value="furniture_store">Furniture Store</option>
              <option value="gym">gym</option>
              <option value="hair_care">Hair Care</option>
              <option value="hardware_store">Hardware Store</option>
              <option value="home_goods_store">Home Goods Store</option>
              <option value="jewelry_store">Jewelry Store</option>
              <option value="library">Library</option>
              <option value="liquor_store">Liquor Store</option>
              <option value="lodging">Lodging</option>
              <option value="mosque">Mosque</option>
              <option value="movie_theater">Movie Theater</option>
              <option value="Museum">museum</option>
              <option value="night_club">Night Club</option>
              <option value="park">Park</option>
              <option value="Pet Store">pet_store</option>
              <option value="restaurant">Restaurant</option>
              <option value="school">School</option>
              <option value="shoe_store">Shoe Store</option>
              <option value="shopping_mall">Shopping Mall</option>
              <option value="spa">Spa</option>
              <option value="stadium">Stadium</option>
              <option value="store">Store</option>
              <option value="supermarket">Supermarket</option>
              <option value="synagogue">Synagogue</option>
              <option value="zoo">Zoo</option>
            </select>
          </div>
          <div className="form-group-radius">
            <select
              value={props.radius}
              onChange={props.handleRadiusTypeChange}
              name="radius"
              type="text"
              className="form-control"
            >
             <option value={1600}>Select a radius</option>
              <option value={1600}>1 mi</option>
              <option value={8000}>5 mi</option>
              <option value={16000}>10 mi</option>
              <option value={40000}>25 mi</option>
            </select>
            <div className="form-group-radius">
              <button type="submit" className="btn btn-info" onClick={props.handleFormSubmit}>
                Search
          </button>
            </div>
          </div>
        </div>

    </>
  )
}


export default Filters;
