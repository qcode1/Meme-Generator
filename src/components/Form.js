import React from "react"

export default function Form() {
    return (
        <section>
            <form>
                <div className="input-box">
                    <input type="text" className="topText" placeholder="Top Text"/>
                    <input type="text" className="bottomText" placeholder="Bottom Text" />
                </div>
                <button type="button" className="generator-btn">
                    Get a new meme image 🖼 
                </button>
            </form>
        </section>
    )
}