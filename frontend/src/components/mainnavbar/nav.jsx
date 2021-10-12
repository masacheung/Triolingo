import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faLayerGroup, faUserAlt, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Nav extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="main-nav">
                <div className="main-nav-user">
                    <div className="main-nav-profile">
                        <FontAwesomeIcon icon={faUserAlt}/>
                    </div>
                    <div className="main-nav-username"> 
                        Username
                    </div>
                </div>
                <button className="new-card">
                    <FontAwesomeIcon icon={faPlus}/><div className="new-card-name">Add Card</div>
                </button>
                <ul className="main-nav-list">
                    <li>
                        <FontAwesomeIcon icon={faQuestionCircle}/> FAQ
                    </li>
                    <br className="main-nav-gap"/>
                    <li>
                        <FontAwesomeIcon icon={faLayerGroup}/> All Cards
                    </li>
                </ul>
                <div className="social">
                    <a href="https://github.com/masacheung/Triolingo"><FontAwesomeIcon icon={faGithub} className="social-img"/></a>
                </div>
            </div>
        )
    }
}

export default Nav;