import React from 'react'

export default function Card(props) {
  return (
    <div className='container'>
    <div className='card'>
        <img src={props.coverImg} className="card-img"></img>
        <div className='card-bottom'>
            <img src='star.png'></img>
            <span>{props.rating}</span>
            <span>({props.reviewCount}) •</span>
            <span>{props.location}</span>
            <p>{props.title}</p>
            <p>From $ {props.price} / pers</p>
        </div>
    </div>
    </div>
  )
}
