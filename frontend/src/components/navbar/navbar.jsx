import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div className="navbar">
                <Link to="/" className="logo-navbar">
                    <p>Triolingo</p>
                </Link>
                <ul className="ul-nav">
                    <li>
                        <a href="https://github.com/masacheung/Triolingo">Github</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;