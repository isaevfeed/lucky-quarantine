import './tasks.css';
import React from 'react';
import Task from './task';
import TaskForm from '../../components/tasks/task-from';

const Tasks = props => (
    <div className="tasks">
        { props.tasks.length > 0 ?
            props.tasks.map(task => {
                return <Task 
                    key={task.id}
                    id={task.id}
                    title={task.title} 
                    amount={task.amount} 
                    status={task.status} 
                    onComplete={props.onComplete}
                />
            }) :
            <h4 className="tasks-empty-title">Have nothing tasks</h4>
        }
        <TaskForm tasksCount={props.tasks.length} onAddTask={props.onAddTask} />
    </div>
);

export default Tasks;