import React from "react";
import { Link } from 'react-router-dom';

const SplashPage = () => {
    return (
        <div className="splash">
            <div className="splash-slogan">
                <div className="slogan">
                    Welcome to Triolingo!
                </div>

                <h1 className="sec-slogan">Splash Page!!!</h1>
                <h1 className="third-slogan">Try Triolingo for Free</h1>

                <Link to="/signup" className="slogan-sign-up-for-free">
                    <button className="main-cta"> Sign up here! </button>
                </Link>
                <br/>
                <div className="slogan-log-in-link">
                <Link to="/login">
                    <button>Already have an account? Log in</button>
                </Link>
                </div>
            </div>

            <hr/>
            <div className="splash-footer">
                <div className="splash-info">
                    <h3>
                        Project Lead
                    </h3>
                    <ul>
                        <li>
                        Man Tat Masa Cheung
                        </li>
                        <li>
                        <a href="https://github.com/masacheung">Github</a>
                        </li>
                        <li>
                        <a href="https://www.linkedin.com/in/man-tat-masa-cheung-725b39b8/">LinkedIn</a>
                        </li>
                    </ul>
                </div>

                <div className="splash-info">
                    <h3>
                        Backend Lead
                    </h3>
                    <ul>
                        <li>
                            Danny Park
                        </li>
                        <li>
                        <a href="https://github.com/dannyjwpark">Github</a>
                        </li>
                        <a href="https://www.linkedin.com/in/jwp007/">LinkedIn</a>
                    </ul>
                </div>

                <div className="splash-info">
                    <h3>
                    Frontend Lead
                    </h3>
                    <ul>
                        <li>
                        Arwen Kim
                        </li>
                        <li>
                        <a href="https://github.com/arwensookim">Github</a>
                        </li>
                        <a href="https://www.linkedin.com/in/arwen-kim-85a01b221/">LinkedIn</a>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default SplashPage;