import React from "react"
import { compose } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import "./style.css"
import Mark1 from "../../images/GoogleMarker1.png"
import Mark2 from "../../images/GoogleMarker2.png"
import Mark3 from "../../images/GoogleMarker3.png"
import Mark4 from "../../images/GoogleMarker4.png"
import Mark5 from "../../images/GoogleMarker5.png"


const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 39.7392, lng: -104.9903 }} center={props.currentLocation}>

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
        icon={{ url: Mark1 }}
        key={props.add1.lat}
        position={{ lat: props.add1.lat, lng: props.add1.lng }}>
      </Marker>
      <Marker
        icon={{ url: Mark2 }}
        key={props.add2.lat}
        position={{ lat: props.add2.lat, lng: props.add2.lng }}>
      </Marker>
      <Marker
        icon={{ url: Mark3 }}
        key={props.add3.lat}
        position={{ lat: props.add3.lat, lng: props.add3.lng }}>
      </Marker>
      <Marker
        icon={{ url: Mark4 }}
        key={props.add4.lat}
        position={{ lat: props.add4.lat, lng: props.add4.lng }}>
      </Marker>
      <Marker
        icon={{ url: Mark5 }}
        key={props.add5.lat}
        position={{ lat: props.add5.lat, lng: props.add5.lng }}>
      </Marker>
    </GoogleMap>
  )
})

export default MapWithAMarker;

