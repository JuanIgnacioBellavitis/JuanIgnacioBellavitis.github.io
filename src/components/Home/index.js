import { Link } from "react-router-dom";
import './index.scss'
import {useState, useEffect} from 'react';
import AnimatedLetters from '../AnimatedLetters';
const Home = () =>{
    
    // useState hook to define the state of my class
    // as letters can only have one animateion and specific 
    // moment in time after initial loading is done.
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['j', 'u', 'a', 'n', ' ', 'I', 'g', 'n', 'a', 'c', 'i', 'o', ' ', 'b', 'e', 'l', 'l', 'a', 'v', 'i', 't', 'i', 's']
    const jobArray = ['w', 'e', 'b', ' ' , 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

     useEffect(() => {        
         setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000);
     }, []);

    return(
        <div className="container home-page"> 
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m </span>
                <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={38}
                />
                </h1>
                <h2>Junior Full Stack Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home;