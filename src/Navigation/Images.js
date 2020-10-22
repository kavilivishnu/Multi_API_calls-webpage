import React, { useState } from 'react';
import axios from 'axios';
import Parallax from 'react-rellax';

function Images() {

    const [photo, setPhoto] = useState("");
    const [clientId] = useState("0gZWxHSSauOXUSFb47wPsYWsNh29f7NqcQk4fJGpOrg");
    const [result, setResult] = useState([]);

    const handleChange = (e) => {
        setPhoto(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log(photo);
        e.preventDefault();
        const url = "https://api.unsplash.com/search/photos?page=1&query=" + photo + "&client_id=" + clientId;
        axios.get(url).then(response => {
            console.log(response);
            setResult(response.data.results);
        });
    }

    return (
        <>
            <div className="images">
                <h1 style={{ color: "white", fontFamily: 'Averia Serif Libre' }}>Searching for a cool Wallpaper ?</h1>
                <h2 style={{ color: "white", fontFamily: 'Averia Serif Libre' }}>You came to the right place! Search out! and grab the ones you like!</h2>
                <br />
                <Parallax speed={-7} >
                    <input type="text" onChange={handleChange} name="photo" placeholder="search photos..." size="70" className="search"></input>
                </Parallax>
                <br />
                <Parallax speed={-7}>
                    <button className="button3" onClick={handleSubmit} type="submit">
                        Search
                </button>
                </Parallax>
                {result.map((photo, index) => (
                    <div key={index}>
                        <img src={photo.urls.small}
                            className="image-style" />
                    </div>
                ))}
            </div>
        </>
    );
}

// https://api.unsplash.com/search/photos?page=1&query=office&client_id=0gZWxHSSauOXUSFb47wPsYWsNh29f7NqcQk4fJGpOrg

export default Images;