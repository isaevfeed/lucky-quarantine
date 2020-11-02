import './nav.css';
import React from 'react';
import {
    Link, 
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

const Nav = ({}) => (
    <section className="nav">
        <Router>
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/tasks">Tasks</Link>
            <Link to="#">Chat</Link>
            <Link to="#">Profile</Link>
            <Route path="/" />
            <Route path="/events" />
            <Route path="/events" />
        </Router>
    </section>
);

export default Nav;