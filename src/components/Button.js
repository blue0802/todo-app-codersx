import React from 'react'

import plusSVG from '../img/plus.svg'

const Button = (props) => {
    return (
        <button
            style={btnStyle} 
            onClick={() => props.onClick()}>
            <img src={plusSVG} style={{ width: "24px" }} alt=""/> 
        </button>
    )
}

const btnStyle = { 
    border: "none", 
    width: "64px", 
    height: "64px", 
    borderRadius: "32px",
    backgroundColor: "#fff",
    boxShadow: "#fff 0 0 4px",
    outline: "none",
    cursor: "pointer",
    margin: "16px",
    position: "relative",
    left: "50%",
    transform: "translate(-50%, 0)" 
}

export default Button
