import React from 'react';
import Masa from "../../styles/img/masa.jpg";
import Danny from "../../styles/img/danny.png";
import Arwen from "../../styles/img/arwen.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, ffaAngllist } from '@fortawesome/free-brands-svg-icons';

const TeamPage = () => {
    return (
        <div className="team-page-container">
            <h1>Meet the Developers</h1>
            <div className="members-container">

                <div className="member-card">
                    <h2>Man Tat Masa Cheung</h2>
                    <div className="image-cropper">
                        <img src={Masa} alt="" className="profile-pic"/>
                    </div>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/man-tat-masa-cheung-725b39b8/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                        <a href="https://github.com/masacheung" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </div>
                </div>

                <div className="member-card">
                    <h2>Danny Park</h2>
                    <div className="image-cropper">
                        <img src={Danny} alt="" className="profile-pic"/>
                    </div>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/jwp007/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin}/>

                        </a>
                        <a href="https://github.com/dannyjwpark" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub}/>

                        </a>
                    </div>
                </div>

                <div className="member-card">
                    <h2>Arwen Kim</h2>
                    <div className="image-cropper">
                        <img src={Arwen} alt="" className="profile-pic"/>
                    </div>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/arwen-kim-85a01b221/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                        <a href="https://github.com/arwensookim" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TeamPage;