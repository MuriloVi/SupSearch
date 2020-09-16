import React from 'react'
import './Homepage.css'
import { useState } from 'react';
import api from '../../Services/api';

//assets
import PulseLoader from "react-spinners/PulseLoader";
//components
import Header from '../../Components/Header/Header'
import Button from '../../Components/Button/Button';
import Card from '../../Components/Card/Card';

function Homepage(){
    const [search, setSearch] = useState()
    const [sups, setSups] = useState()
    const [loading, setLoading]= useState(false)

    function HandleForm(e){
        e.preventDefault()
        setLoading(true)
        api.get(`/search/${search}`).then(response => {
            const allSups = response.data.results;
            console.log(allSups)
            setSups(allSups)
            setTimeout(()=>{setLoading(false)}, 300)
        })
    }

    
    return(
        <div>
            <Header/>
            <form onSubmit={HandleForm}>
                <input placeholder="Super" onChange={(e)=>setSearch(e.target.value)}/>
                <Button type="submit"/>
            </form>
            <div className="sup-box">
                {loading ? <div> <PulseLoader color="#468EFF"/></div> : (sups ? sups.map(sup => {
                    return(
                        <Card name={sup.name} image={sup.image.url} />
                    )
                }): <p style={{textAlign:'center'}}>Search</p>)}
            </div>
        </div>
    )
}

export default Homepage;