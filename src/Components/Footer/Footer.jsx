import React from 'react';
import '../Footer/Footer.css';
import logoImage from '/Image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <footer className='footer'>
            <img src={logoImage} alt="" />
            <div className="redes">
                <a href="linkedin.com/in/adrian-valerio-coronel" className="redes-icon"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                <a href="https://github.com/AdrianC89" className="redes-icon"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
            </div>
            <p>Desarrollado por Adrián Coronel | 2024</p>
        </footer>

    );
}
