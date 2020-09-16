import React from 'react'
import './Button.css'
import {BiSearchAlt2} from 'react-icons/bi'


function Button(props){
    return(
         <button type={props.submit}>
           <BiSearchAlt2/>
        </button>
    )
}

export default Button