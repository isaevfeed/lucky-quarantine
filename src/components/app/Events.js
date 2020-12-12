import './Events.css';
import React from 'react';

const Events = (props) => {
    return (
    <div className="Events">
        {props.items.map(item => (
            <div className="Events_item" style={{backgroundColor: props.colors[item.type]}}>
                <div className="Events_item-top">
                    <div className="Events_item-top-title"><img src={"/images/" + props.images[item.type] + ".png"} />{item.subtitle}</div>
                    <div className="Events_item-top-time"> at {timeFormat(item.time)}</div>
                </div>
                {initContent(item.content)}
            </div>
        ))}
    </div>
)};

function initContent(content) {
    let div = "";
    if (content) {
        div = <div className="Events_item-content">{content}</div>;
    }

    return (div);
};

function timeFormat(time) {
    return time
}

export default Events;