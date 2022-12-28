import { NavLink } from 'react-router-dom'; 
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faBars, faClose, faGear } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>

 const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return(
        <div className='nav-bar'>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>
                <FontAwesomeIcon 
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className='close-icon' />
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/juan-ignacio-bellavitis-6a882a192/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://github.com/JuanIgnacioBellavitis'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://www.instagram.com/juanibellavitis/'>
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon'
            />
        </div>
    )
 }

 export default Sidebar;