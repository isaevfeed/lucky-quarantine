import './events.css';
import React from 'react';

const Events = (props) => {
    return (
    <div className="events">
        {props.items.map(item => (
            <div className="event" style={{backgroundColor: props.colors[item.type]}}>
                <div className="event-top">
                    <div className="event-top-title"><img src={"/images/" + props.images[item.type] + ".png"} />{item.subtitle}</div>
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