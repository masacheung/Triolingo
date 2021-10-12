import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../styles/img/logo.png"

const Navbar = ({loggedIn, logout, currentUser}) => {
    const loginButton = () => {
        return <Link to="/login">Log In</Link>
    }

    const logoutButton = () => {
        return (
            <ul className="nav-welcome-logout">
                <li className="nav-welcome">Welcome, {currentUser}</li>
                <li><button onClick={logout}>Logout</button></li>
            </ul>
        )
    }

    return (
        <header>
            <div className="navbar">
                <Link to="/" className="logo-navbar">
                    <img src={logo} className="logo-img"/>
                </Link>
                <ul className="ul-nav">
                    <li>
                        <a href="https://github.com/masacheung/Triolingo">Github</a>
                    </li>
                    <li>
                        <Link to="/team">Our Team</Link>
                    </li>
                </ul>
                <nav className="session-nav">
                    {loggedIn ? logoutButton()  : loginButton()}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;