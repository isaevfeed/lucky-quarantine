import './nav.css';
import React from 'react';
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
                name="Home"
                path="/"
                icon={faHome}
                lock={false}
            />
            <Link 
                name="Tasks"
                path="/tasks"
                icon={faTasks}
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