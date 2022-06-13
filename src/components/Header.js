import React from "react"
import TrollFace from "../images/troll-face.png"

export default function Header() {
    return (
        <div className="header">
            <img className="header-img" src={TrollFace} alt="Troll Face"></img>
            <h1 className="header-title"> Meme Generator</h1>
            <h4 className="header-project">React Course - Project 3</h4>
        </div>
    )
}