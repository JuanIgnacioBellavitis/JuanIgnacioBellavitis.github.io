import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import myResume from '../../assets/JuanIgnacioBellavitisResume.pdf';

const Skills = () =>{
    const [letterClass, setLetterClass] = useState('text-animate');
    return(
        <>
            <div className='container skills-page'>
                <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['S', 'k', 'i', 'l', 'l', 's']}
                        idx={15}                        
                    />
                </h1>
                <p>
                    Intermediate level in Back-End and Beginner in Front-End development. Proficient in an assortment of technologies, including technologies like MySql and Microsoft SQL server for databases, Java, ASP.NET and C# for the Back-end, HTML, CSS, SASS, Javascript, and
                    currently studying React for the Front-End. Knowledgeable in user interface, testing, and debugging 
                    processes.
                </p>
                <p>
                    Currently I am not an expert, but I do my best to make the code I write as neat and optimized as possible.
                </p>
                <p>
                   You can visit my <a className='links' target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/juan-ignacio-bellavitis-6a882a192/'>Linkedin </a> 
                     profile for more details. Also, you can see my cv in this <a className='links' target="_blank" rel="noreferrer" href={myResume}>link</a>
                 
                </p>
                </div>
            </div>  
        </>
    );
}

export default Skills;