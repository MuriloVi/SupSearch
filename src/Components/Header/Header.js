import React from 'react'

import Logo from '../../Assets/Super.png'


function Header(){
    return(
        <header>
            <div>
                <img src={Logo} alt=""/>                
            </div>
        </header>
    )
}

export default Header