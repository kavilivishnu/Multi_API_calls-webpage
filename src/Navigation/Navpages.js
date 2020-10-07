import React from 'react';
import { Link } from 'react-router-dom';

function Navpages() {
    return (
        <nav className="nav">
            <ul>
                <Link to="/Home" style={{textDecoration: "none", padding: "0 35px", marginLeft: "3%", fontFamily: 'Merienda'}} className="hover">
                    HOME
                </Link>
                <Link to="/Images" style={{textDecoration: "none", padding: "0 35px", fontFamily: 'Merienda'}} className="hover">
                    IMAGES
                </Link>
                <Link to="/Posts" style={{textDecoration: "none", padding: "0 35px", fontFamily: 'Merienda'}} className="hover">
                    POSTS
                </Link>
                <Link to="/Albums" style={{textDecoration: "none", padding: "0 35px", fontFamily: 'Merienda'}} className="hover">
                    ALBUMS
                </Link>
            </ul>
        </nav>
    )
}   

export default Navpages;
