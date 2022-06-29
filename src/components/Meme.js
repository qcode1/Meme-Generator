import React from "react"

export default function Form(props) {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    // eslint-disable-next-line no-unused-vars
    const [allMemes, setAllMemes] = React.useState([])

    // USING FETCH FOR API CALL
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    // USING ASYNC AWAIT FOR API CALL
    // React.useEffect(() => {
    //     async function getMemes() {
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const data = await res.json()
    //         setAllMemes(data.data.memes)
    //     }
    //     getMemes()
    // }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {

        const target = event.target
        var name = target.name
        var value = target.type === "checkbox" ? target.checked : target.value

        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })

    }

    return (
        <section>
            <div>
                <form>
                    <div className="input-box">
                        <input
                            type="text"
                            className="topText"
                            placeholder="Top Text"
                            name="topText"
                            onChange={handleChange}
                            value={meme.topText}
                        />
                        <input
                            type="text"
                            className="bottomText"
                            placeholder="Bottom Text"
                            name="bottomText"
                            onChange={handleChange}
                            value={meme.bottomText}
                        />
                    </div>
                    <button type="button" className="generator-btn" onClick={getMemeImage}>
                        Get a new meme image 🖼
                    </button>
                </form>
            </div>
            <br></br>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="Meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </section>
    )
}