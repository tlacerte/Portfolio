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
            <h1>Hi There, my name is Taylor Lacerte.</h1>
            <h2>Welcome to my Portfolio!</h2>
            <ul className="social-icons">
                <li className="social-icon"><a href="https://linkedin.com/in/taylor-lacerte/" target="_blank">{linkedInIcon}</a></li>
                <li className="social-icon"><a href="https://github.com/tlacerte" target="_blank">{githubIcon}</a></li>
            </ul>
        </div>
    )
}

export default Home