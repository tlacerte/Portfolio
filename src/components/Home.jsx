import React from 'react';
import Image from 'react-bootstrap/Image'
import profileImg from './50251226.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const linkedInIcon = <FontAwesomeIcon icon={['fab', 'linkedin']} />
const githubIcon = <FontAwesomeIcon icon={['fab', 'github']} />

const Home = () => {
    return (
        <div className="Home">
            <Image className="profile-img" src={profileImg} roundedCircle />
            <div className="home-text">
                <h1>Hi there, my name is Taylor Lacerte.</h1>
                <h2>Welcome to my Portfolio!</h2>
                <ul className="social-icons">
                    <li className="social-icon"><a href="https://linkedin.com/in/taylor-lacerte/" target="_blank" rel="noopener noreferrer">{linkedInIcon}</a></li>
                    <li className="social-icon"><a href="https://github.com/tlacerte" target="_blank" rel="noopener noreferrer">{githubIcon}</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Home