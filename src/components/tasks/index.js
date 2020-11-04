import './tasks.css';
import React from 'react';
import Task from './task';

const Tasks = props => (
    <div className="tasks">
        {props.tasks.map(task => {
            return <Task 
                key={task.id}
                id={task.id}
                title={task.task} 
                amount={task.amount} 
                status={task.status} 
                onComplete={props.onComplete}
            />
        }
        )}
    </div>
);

export default Tasks;