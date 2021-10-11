import React from "react";
import { Link } from "react-router-dom";

const NavBarSession = ({currentUser, logout}) => {
    const LoginButton = () => (
        <div>
            <Link to="/team">Our Team</Link>
            <nav className="session-nav">
                <Link to="/login">Log In</Link>
            </nav>
        </div>
    )

    const greetingOrLogout = () => {
        <div>
            <Link to="/team">Our Team</Link>
            <nav className="session-nav">
                <Link to="/" onClick={logout}>Log out</Link>
            </nav>
        </div>
    }

    return currentUser ? greetingOrLogout() : LoginButton();
}

export default NavBarSession;