import React from 'react'
import './Card.css'
function Card(props){
    return(
        <div style={{backgroundImage:`url(${props.image})`, backgroundSize:'cover'}} className="card-box">
            <div> <p>{props.name}</p></div>           
        </div>
    )
}

export default Card