import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react';
import emailJs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import L from "leaflet";

const customMarker = new L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40]
  });

const Contact = () =>{

    const refForm = useRef();
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {        
        setTimeout(() => {
           return setLetterClass('text-animate-hover')
       }, 3000);
    }, []);

    const sendEmail = (e) =>{
        e.preventDefault()

        emailJs.sendForm(
            'service_e25z5q5',
            'template_u0ilh9e',
            refForm.current,
            'TBLrd8aGkwsHKCDFG'
        )
        .then( 
            () => {
                alert('Message succesfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
    }

    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}                        
                    />
                </h1>
                <p>
                I am interested in jobs in a dependency 
                relationship, I like to work in a team - especially ambitious
                if they are large projects. However, if you have other requests or questions, don´t hesistate to contact me using below form either.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required/>
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="email" required/>
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder='Subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" required/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Juan Ignacio Bellavitis,
                <br/>
                Argentina
                <br/>
                Buenos Aires
                <br/>
                <span>juan.bellavitis@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[-34.504507, -58.566147]}  zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[-34.504507, -58.566147]}
                     icon={customMarker}>
                        <Popup>I live here :D</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Contact;