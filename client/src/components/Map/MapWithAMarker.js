import React from "react"
import { compose } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import "./style.css"


const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {
    // console.log("Map with a marker props.markers: ", props.placeID)
    return (
      <GoogleMap defaultZoom={10} defaultCenter={{ lat: 39.7392, lng: -104.9903 }} center={props.currentLocation}>
        {/* {console.log(typeof(props.currentLocation))} */}
        {/* {console.log(`default loc ${defaultCenter}`)} */}
        {console.log("CURRENT LOCATION",props.currentLocation)}

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

      <Marker
        icon={{ url: "http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=xxx%7c5680FC%7c000000&.png", }}
        key={props.add1.lat}
        position={{ lat: props.add1.lat, lng: props.add1.lng }}>
      </Marker>
      <Marker
        icon={{ url: "http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=xxx%7c5680FC%7c000000&.png", }}
        key={props.add2.lat}
        position={{ lat: props.add2.lat, lng: props.add2.lng }}>
        </Marker>
      <Marker
        icon={{ url: "http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=xxx%7c5680FC%7c000000&.png", }}
        key={props.add3.lat}
        position={{ lat: props.add3.lat, lng: props.add3.lng }}>
        </Marker>
      <Marker
        icon={{ url: "http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=xxx%7c5680FC%7c000000&.png", }}
        key={props.add4.lat}
        position={{ lat: props.add4.lat, lng: props.add4.lng }}>
        </Marker>
      <Marker
        icon={{ url: "http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=xxx%7c5680FC%7c000000&.png", }}
        key={props.add5.lat}
        position={{ lat: props.add5.lat, lng: props.add5.lng }}>
        </Marker>
    </GoogleMap>
  )
})

export default MapWithAMarker;