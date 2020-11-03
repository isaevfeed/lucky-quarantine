import './events.css';
import React from 'react';

const colors = {
    'food': '#BDFBFF',
    'break': '#C2FFBD',
    'sleep': '#E7E7E7',
    'task': '#FEFFBD',
    'lesson': '#FEBDFF',
    'job' : '#FFBDBD',
}

const Events = (props) => {
    console.log(props.items);
    return (
    <div className="events">
        {props.items.map(item => (
            <div className="event" style={{backgroundColor: colors[item.type]}}>
                <div className="event-top">
                    <div className="event-top-title">{item.subtitle}</div>
                    <div className="event-top-time">{timeFormat(item.time)}</div>
                </div>
                {initContent(item.content)}
            </div>
        ))}
    </div>
)};

function initContent(content) {
    let div = "";
    if (content) {
        div = <div className="event-content">{content}</div>;
    }

    return (div);
};

function timeFormat(time) {
    return time
}

export default Events;