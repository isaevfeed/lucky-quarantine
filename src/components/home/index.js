import './home.css';
import React from 'react';

const Home = (props) => setHomeImage(props.items, props.images);

function setHomeImage(events, images) {
    for (let i = 0; i < events.length; i++) {
        let time = Date.parse('01/01/2011 ' + events[i].time + ':00');
        let current = Date.parse('01/01/2011 ' + currentTimeFormat() + ':00');

        if (time == current) {
            localStorage.setItem('type', events[i].type);
            localStorage.setItem('subtitle', events[i].subtitle);
            break;
        }

        if (time < current) {
            localStorage.setItem('type', events[i].type);
            localStorage.setItem('subtitle', events[i].subtitle);
            break;
        }
    }

    const type = localStorage.getItem('type');
    const subtitle = localStorage.getItem('subtitle');

    return (
        <div className="current-day">
            <img className="current-day-img" src={"/images/"+images[type]+".png"} />
            <h4 className="current-day-title">{subtitle}</h4>
        </div>
    );
}

function currentTimeFormat() {
    const currentDate = new Date();
    return currentDate.getHours() + ':' + (currentDate.getMinutes() < 10 ? '0' + currentDate.getMinutes() : currentDate.getMinutes())
}

export default Home;