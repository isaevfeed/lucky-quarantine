import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import './Preloader.css';

const Preloader = () => (
    <div className="Preloader">
        <div className="Preloader-text">L<span className="Preloader-text-span">Q</span></div>
        <FontAwesomeIcon icon={faCircleNotch} pulse />
    </div>
);

export default Preloader;