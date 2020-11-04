import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import {faSquare} from '@fortawesome/free-regular-svg-icons';

const Task = props => (
    <div className="task" onClick={() => props.onComplete(props.id)} style={{borderColor: props.status ? '#79E370' : '#d0d0d0'}}>
        <div className="task-complete" style={props.status ? {color: '#79E370'} : {}}>
            <FontAwesomeIcon icon={props.status ? faCheckSquare : faSquare} />
        </div>
        <div className="task-title">
            {props.title}
        </div>
        <div className="task-amount">
            {props.amount > 0 && props.amount ? 'x' + props.amount : ''}
        </div>
    </div>
);

export default Task;