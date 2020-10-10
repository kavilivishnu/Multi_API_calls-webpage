import React from 'react';
import { Link } from 'react-router-dom';

function Navpages() {
    return (
        <nav className="nav">
            <ul>
                <Link to="/Home" className="hover">
                    HOME
                </Link>
                <Link to="/Images" className="hover">
                    IMAGES
                </Link>
                <Link to="/Posts" className="hover">
                    POSTS
                </Link>
                <Link to="/Albums" className="hover">
                    ALBUMS
                </Link>
            </ul>
        </nav>
    )
}

export default Navpages;
