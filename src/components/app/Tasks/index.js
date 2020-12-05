import './Tasks.css';
import React from 'react';
import Task from './task';
import TaskForm from './TaskForm';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Tasks = props => (
    <div className="tasks">
        <div className="tasks-clear-btn" onClick={onOpenWarningPopup}>
            <FontAwesomeIcon icon={faTrash}/>
        </div>
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
        <div id="tasks-warning-popup" className="tasks-warning-popup">
            <div className="tasks-warning-popup-img">
                <img src="/images/warning.png" />
            </div>
            <div className="tasks-warning-popup-message">
                Вы уверены, что хотите удалить все задачи? 
                У вас сохранится история, но восстановить задачи вы
                уже не сможете.
            </div>
            <div className="tasks-warning-popup-btns">
                <button 
                    className="tasks-warning-popup-btn" style={{backgroundColor: '#E7E7E7'}}
                    onClick={() => onClearStore(props.onClearTasks)}>Уверен</button>
                <button 
                    className="tasks-warning-popup-btn" style={{backgroundColor: '#FFBDBD'}}
                    onClick={onClosePopup}>НЕЕЕЕТ!</button>
            </div>
        </div>
    </div>
);

function onOpenWarningPopup() {
    const popup = document.querySelector('#tasks-warning-popup');

    popup.style.display = 'block';
}

function onClearStore(onClearTasks) {
    onClearTasks();
}

function onClosePopup() {
    const popup = document.querySelector('#tasks-warning-popup');

    popup.style.display = 'none';
}

export default Tasks;