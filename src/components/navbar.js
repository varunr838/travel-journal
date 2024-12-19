import React from "react"
import globeLogo from "../images/globe.svg"
export default function Navbar(){
    return(
        <div className="header2">
            <img className="globe-icon" src = {globeLogo}></img>
            my travel journal
        </div>
    )
}