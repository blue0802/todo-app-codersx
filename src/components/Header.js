import React from 'react'

import menuSvg from '../img/menu-symbol.svg'

const Header = () => {
    return (
        <div style={{ display: "flex"}}>
            <img src={menuSvg} style={{ flex: 0 }} alt="" />
            <div style={titleStyle}>DAILIST</div>
        </div>
    )
}

const titleStyle = { 
    flex: 1, 
    textAlign: "center", 
    lineHeight: "32px",
    letterSpacing: "8px" 
}

export default Header
