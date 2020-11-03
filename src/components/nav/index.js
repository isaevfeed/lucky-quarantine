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
            <Router>
                <Link 
                    name="Home"
                    path="/"
                    icon={faHome}
                />
                <Link 
                    name="Events"
                    path="/events"
                    icon={faCalendarWeek}
                />
                <Link 
                    name="Tasks"
                    path="/tasks"
                    icon={faTasks}
                />
                <Link 
                    name="Chat"
                    path="#"
                    icon={faLock}
                />
                <Link 
                    name="Profile"
                    path="#"
                    icon={faLock}
                />
                <Route path="/" />
                <Route path="/events" />
                <Route path="/events" />
            </Router>
        </section>
    );
    };

export default Nav;