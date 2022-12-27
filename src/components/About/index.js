import './index.scss'
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faCss3, faGitAlt, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const About = () =>{
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>I am a web programmer with more than 3 years of experience in 
                Back-end development and with 1 year of experience in Front-End, 
                looking for a role in an IT company with the opportunity to work 
                with the latest technologies and grow professionally.</p>
                <p>Proficient in an assortment of technologies, including Java, ASP.NET, C#, IIS, and 
                Microsoft SQL Server. Knowledgeable in user interface, testing, and debugging 
                processes.</p>
                <p></p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJs} color="#EFD81D"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faDatabase} color="#42424e"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;