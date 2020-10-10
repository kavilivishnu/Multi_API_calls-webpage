import React, { Component } from 'react';
import Parallax from 'react-rellax';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoading: false
        }
    }

    componentDidMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=tzNrCCGQp8AjXpMDrUtEXi43fzLjUbg2mV4X1hQq')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoading: true,
                    items: json
                })
            });
    }

    render() {
        var { isLoading, items } = this.state
        if (!isLoading) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <div key={items.id} style={{ textAlign: "center" }} className="Home_background">
                    <Parallax speed={-4} >
                        <img style={{ width: "50%", height: "50%" }} src="https://images.wallpapersden.com/image/download/astronauts_66067_3840x2160.jpg" alt="" />
                    </Parallax>
                    <Parallax speed={-2}>
                        <h1 style={{ color: "white", fontFamily: 'Bungee Inline' }}>Astronomy Picture of the Day</h1>
                    </Parallax>
                    <Parallax speed={-2}>
                        <h3 style={{ color: "white", fontFamily: 'Architects Daughter' }}><span><a href="https://apod.nasa.gov/apod/archivepix.html">Discover the cosmos! </a></span>
                            Each day a different image or photograph of our fascinating universe is featured, along with a
                            brief explanation written by a professional astronomer.</h3>
                    </Parallax>
                    <h3 style={{ color: "white" }}>{items.date}</h3>
                    <Parallax speed={-4}>
                        <h2 style={{ color: "white", fontFamily: 'Mirza' }}>Explanation:</h2><h3><span style={{ color: "white", fontFamily: 'Mirza' }}>{items.explanation}</span></h3>
                    </Parallax>
                    <br />
                    <Parallax speed={-1}>
                        <h2 style={{ color: "white", fontFamily: 'Kaushan Script' }}>{items.title}</h2>
                    </Parallax>
                    <br />
                    <br />
                    <img style={{ width: "101%", marginTop: "50px" }}
                        src="https://apod.nasa.gov/apod/image/2009/PairsMoonPace.jpg" alt=""></img>
                    <br />
                    <span style={{ color: "white" }}><b>Image Credit & </b>
                        <a href="https://apod.nasa.gov/apod/lib/about_apod.html#srapply" style={{ color: "whitesmoke" }}>Copyright</a>
                    </span>: <a href="https://greenflash.photo/about-me/" style={{ color: "whitesmoke" }}>{items.copyright}</a>
                </div>
            );
        }
    }
}

export default Home;
