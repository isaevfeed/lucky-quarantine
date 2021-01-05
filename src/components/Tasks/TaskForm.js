import React, {useState} from 'react';
import {faChevronUp, faChevronDown, faRoad} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useHistory} from 'react-router-dom';
import {Button} from '@material-ui/core';

const TaskForm = props => {
    let [isVisible, setVisible] = useState(false);
    let history = useHistory();

    return (
        <div id="task-form" className="task-form">
            <div className="task-form-close" onClick={(e) => switchForm(e, isVisible, setVisible)}>
                <FontAwesomeIcon icon={isVisible ? faChevronDown : faChevronUp} />
            </div>
            <form action="" onSubmit={(e) => submitForm(e, props.tasksCount, props.onAddTask, history)}>
                <div className="task-form-input">
                    <input 
                        id="title" className="task-form-text" placeholder="Суть задачи" type="text" autoComplete="off"
                        onChange={onShowHistory} />
                    <ul id="task-input-history" className="task-form-input-history">
                    </ul>
                </div>
                <div className="task-form-input task-form-input-label">
                    <label htmlFor="amount">Количество: </label>
                    <input id="amount" className="task-form-num" type="number" min="0" max="10" />
                </div>
                <button className="task-form-btn">добавить</button>
            </form>
        </div>
    );
};

function submitForm(e, tasksCount, onAddTask, history) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    let amount = document.getElementById('amount').value;

    if (title != '') {
        if (amount == '') {
            amount = 0;
        }
        onAddTask({
            id: tasksCount + 1,
            title,
            amount,
            status: false,
        })
    }

    history.push('/');

    return false;
}

function switchForm(e, isVisible, setVisible) {
    const form = document.querySelector('#task-form');
    const unVisibleBot = -80;
    const visibleBot = 100;
    let count, step = 4;

    if (!isVisible) {
        count = unVisibleBot;
        let anim = setInterval(_ => {
            if (count < visibleBot) {
                count += step;
                form.style.bottom = count + 'px';
            } else {
                clearInterval(anim);
            }
        });
    } else {
        count = visibleBot;
        let anim = setInterval(_ => {
            if (count > unVisibleBot) {
                count -= step;
                form.style.bottom = count + 'px'; 
            } else {
                clearInterval(anim);
            }
        });
    }

    setVisible(!isVisible);
}

function onShowHistory(e) {
    const history = document.querySelector('#task-input-history');
    const tasksHistory = JSON.parse(localStorage.getItem('tasksHistory'));
    let ulContent = '';

    if (tasksHistory) {
        let resHistory = tasksHistory.filter(item => {
            let val = e.target.value;
    
            if (val.search(/[\*\+\)\(\&\[\]\)\$\%\#]/) !== -1) {
                val = '';
            }
    
            if (val !== '') {
                if (item.toLowerCase().search(val.toLowerCase()) != -1) {
                    ulContent += '<li>' + item + '</li>';
                    return item;
                }
            }
        });

        if (resHistory.length > 5) {
            history.style.overflowY = 'scroll';
        } else {
            history.style.overflowY = 'hidden';
        }
    
        history.innerHTML = ulContent;
    
        if (resHistory.length !== 0) {
            if (e.target.value === '') {
                history.style.display = 'none';
            } else {
                history.style.display = 'block';
            }
        } else {
            history.style.display = 'none';
        }
    
        for (let i = 0; i < history.children.length; i++) {
            history.children[i].addEventListener('click', onSetTaskText);
        }
    }
}

function onSetTaskText(e) {
    const history = document.querySelector('#task-input-history');
    const input = document.querySelector('#title');
    input.value = e.target.textContent;
    history.style.display = 'none';
}

export default TaskForm;