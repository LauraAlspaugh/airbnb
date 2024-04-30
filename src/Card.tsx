import React from "react";
export default function Card(props){
    console.log(props)
    return(
        <main className="card-profile">
             {props.openSpots === 0 && <div className="badge">SOLD OUT</div>}
            <img className="card-image" alt="card" src={props.picture}/>
            <h3><i className="mdi mdi-star star-icon"></i> {props.star} USA</h3>
            <h3>{props.description}</h3>
            <h3>${props.price}/person</h3>
        </main>
    )
}