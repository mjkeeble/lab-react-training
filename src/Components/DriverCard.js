import React from 'react'
import Rating from "./Rating"

export default function DriverCard(props) {
    return (
        <div>
            <img src={props.img} alt="" style={{ width: '20%' }} />
            <h2>{props.name}</h2>
            <Rating>{props.rating}</Rating>
            <h5>
                {props.car.model} - {props.car.licensePlate}
            </h5>
        </div>
    )
}
