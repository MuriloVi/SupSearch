import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import './Supage.css'
import api from '../../Services/api'


//assets
import Logo from '../../Assets/Super.png'
import {AiOutlineHome} from 'react-icons/ai'
import PulseLoader from "react-spinners/PulseLoader";


function Supage(){
    const [ sup, setSup] = useState()
    const [loading , setLoading] =useState(true)
    let {id }= useParams()
    useEffect(()=>{        
        api.get(`/${id}`).then(response=>{
            setLoading(true)
            const oneSup = response.data;
            console.log(oneSup)
            setSup(oneSup)
            setLoading(false)
        })
        
    }, [id])
    
    return(
        <div>
            {loading ? <div style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"10%"}}> <PulseLoader color="#468EFF"/></div> : (
            <div className="all-box">
               <div className="sup-info">
                   <div className="top-info">
                   <img src={Logo} alt=""/>
                   <h2>{sup.name}</h2>  
                   </div>
                   <div className="general-info">
                       <div className="stats">
                       <h3>Powerstats:</h3>
                       <p>{sup.powerstats.intelligence==="null" ? 'Intelligence: no info' : `Intelligence: ${sup.powerstats.intelligence}` }</p>
                       <p>{sup.powerstats.combat==="null" ? 'Combat: no info' : `Combat: ${sup.powerstats.combat}` }</p>
                       <p>{sup.powerstats.power==="null" ? 'power: no info' : `Power: ${sup.powerstats.power}` }</p>
                       <p>{sup.powerstats.speed==="null" ? 'Speed: no info' : `Speed: ${sup.powerstats.speed}` }</p>
                       <p>{sup.powerstats.strength==="null" ? 'Strength: no info' : `Strength: ${sup.powerstats.strength}` }</p>
                       </div>
                       <div className="bio"> 
                       <h3>Personal:</h3>                        
                           <p>{`Occupation: ${sup.work.occupation}`}</p>  
                           <p>{`Base: ${sup.work.base}`}</p> 
                        </div>      
                        <div className="bio"> 
                       <h3>Publisher:</h3>                        
                           <p>{`${sup.biography.publisher}`}</p>  
                        </div>                 
                   </div>
                      
               </div>
               <div className="sup-img">
                   <img  src={`${sup.image.url}`} alt=""  />
               </div>               
            </div>
            
            )}
            <div className="page-bottom">
                <Link to="/"><button><AiOutlineHome size="50px"/></button></Link>
            </div>
         </div>
    )
}

export default Supage;