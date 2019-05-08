import React from "react"
import "./DetailCards.css"
import { Col, Row } from "reactstrap";
import styled from "styled-components"

const Styled = styled.div` && {
    border: ${props => props.active ? "5px solid #57aabe" : null}
}`

// FILTERS for location type & search radius
function DetailCards(props) {
    let place = props.details
    let open
    let exists

    function openData(){
        if (!place.opening_hours){
            exists = false
        } else {
            exists = true
            if (place.opening_hours.open_now) {
                open = true
            } else {
                open = false
            }
        }
    }

    openData()
    
    return (
        <Styled key={place.name} className="card" style={{ width: "95%" }} id={place.reference} active={props.selectedThing===place.reference}>
            <div className="card-header" id="cardHeader">
                <h4 className="card-title" id="cardTitle">{place.name}<img src={place.icon} style={{ width: "30px", height: "30px", padding: "5px" }}/></h4>
            </div>
            <div className="card-body" id="cardBody1">
            <ul>
                <li className="card-text cardText"><b id="title">Address:</b> {place.vicinity}</li>
                <li className="card-text cardText"><b id="title">Rating:</b> {place.rating}</li>
                <li className="card-text cardText"><b id="title">Price Level:</b> {place.price_level}</li>
                <li className="card-text cardText" id="open">{exists ? (open ? "Currently Open" : "Currently Closed"): null}</li>
            </ul>
            </div>
        </Styled>
    )
}

export default DetailCards