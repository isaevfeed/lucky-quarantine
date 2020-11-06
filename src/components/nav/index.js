import './nav.css';
import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import {
    faHome, 
    faCalendarWeek,
    faTasks,
    faLock,
} from '@fortawesome/free-solid-svg-icons';
import Link from './link';

const Nav = ({}) => {
    return (
        <section className="nav">
            <Link 
                name="Tasks"
                path="/"
                icon={faTasks}
                lock={false}
            />
            <Link 
                name="Home"
                path="/home"
                icon={faHome}
                lock={false}
            />
            <Link 
                name="Events"
                path="/events"
                icon={faCalendarWeek}
                lock={false}
            />
            <Link 
                name="Chat"
                path="#"
                icon={faLock}
                lock={true}
            />
            <Link 
                name="Profile"
                path="#"
                icon={faLock}
                lock={true}
            />
        </section>
    );
    };

export default Nav;