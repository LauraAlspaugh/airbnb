import React from "react";
export default function Card(props){
    console.log(props)
    return(
        <main className="card-profile">
             {props.item.openSpots === 0 && <div className="badge">SOLD OUT</div>}
            <img className="card-image" alt="card" src={props.item.picture}/>
            <h3><i className="mdi mdi-star star-icon"></i> {props.item.star} USA</h3>
            <h3>{props.item.description}</h3>
            <h3>${props.item.price}/person</h3>
        </main>
    )
}