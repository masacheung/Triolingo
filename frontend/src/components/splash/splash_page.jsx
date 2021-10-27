import React from "react";
import { Link } from 'react-router-dom';
import demo from "../../styles/img/demo.png";

const SplashPage = () => {
    return (
        <div className="splash">
            <div className="splash-slogan">
                <div className="slogan">
                    Welcome to Triolingo!
                </div>

                <h1 className="sec-slogan">Triolingo is the best platform to help you study!!!<br/>Sign Up now and build your knowledge, <br/> prepare for your school!</h1>
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
            <div className="splash-image">
                <img src={demo} alt="demo-image"/>
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
                        <a href="https://github.com/masacheung" target="_blank" rel="noreferrer">Github</a>
                        </li>
                        <li>
                        <a href="https://www.linkedin.com/in/man-tat-masa-cheung-725b39b8/" target="_blank" rel="noreferrer">LinkedIn</a>
                        </li>
                        <li>
                        <a href="https://angel.co/u/man-tat-masa-cheung" target="_blank" rel="noreferrer">AngelList</a>
                        </li>
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
                        <a href="https://github.com/arwensookim" target="_blank" rel="noreferrer">Github</a>
                        </li>
                        <li>
                        <a href="https://www.linkedin.com/in/arwen-kim-85a01b221/" target="_blank" rel="noreferrer">LinkedIn</a>
                        </li>
                        <li>
                        <a href="https://angel.co/u/arwen-kim" target="_blank" rel="noreferrer">AngelList</a>
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
                        <a href="https://github.com/dannyjwpark" target="_blank" rel="noreferrer">Github</a>
                        </li>
                        <li>
                        <a href="https://www.linkedin.com/in/jwp007/" target="_blank" rel="noreferrer">LinkedIn</a>
                        </li>
                        <li>
                        <a href="https://angel.co/u/jong-woon-park" target="_blank" rel="noreferrer">AngelList</a>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="copyright">
                    Copyright © 2021 Triolingo
            </div>
        </div>
    )
}

export default SplashPage;