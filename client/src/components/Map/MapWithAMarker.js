import React from "react"
import { compose } from "recompose"
import {  withScriptjs,  withGoogleMap,  GoogleMap,  Marker,  InfoWindow} from "react-google-maps"
import "./style.css"
// import "./SearchForm"

const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {
    console.log("Map with a marker props.markers: ", props.placeID)
    return (
      <GoogleMap defaultZoom={8} defaultCenter={props.currentLocation ? props.currentLocation : { lat: 0, lng: 0 }}>
        {/* {console.log(typeof(props.currentLocation))} */}
        {/* {console.log(`default loc ${defaultCenter}`)} */}
  
        {props.markers.map(marker => {
          
          const onClick = props.onClick.bind(this, marker)
          return (
            <Marker
              key={marker.place.id}
              onClick={() => onClick(marker.id)}
              id={marker.id}
              position={{ lat: marker.place.lat, lng: marker.place.lng }}
            >
              {props.selectedMarker === marker &&
                <InfoWindow>
                  <div>
                    {marker}
                  </div>
                </InfoWindow>}
  
            </Marker>
          )
        })}
      </GoogleMap>
    )
  })

  export default MapWithAMarker;