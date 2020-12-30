import {
    addTask,
    completeTask,
    clearTasks,
} from './actions/tasks-action';
import sortCompare from './funcs/sort-compare';

const tasks = [];

export default function(state = tasks, action) {
    if (localStorage && localStorage.getItem('tasks')) {
        const localTasks = localStorage.getItem('tasks');
        if (localTasks != '' && localTasks != '[]') {
            state = JSON.parse(localTasks);
        }
    }
    
    switch(action.type) {
        case addTask.toString():
            state = [...state, action.payload];
            saveTaskInStorage(state)
            break;
        case completeTask.toString():
            state = state.map(task => {
                if (task.id == action.payload) {
                    task.status = !task.status;
                }
                return task;
            });
            saveTaskInStorage(state)
            break;
        case clearTasks.toString():
            localStorage.setItem('tasksHistory', JSON.stringify([]));
            state.map(task => {
                let history = JSON.parse(localStorage.getItem('tasksHistory'));
                
                if (history.indexOf(task.payload) === -1) {
                    history.push(task.payload);
                }

                localStorage.setItem('tasksHistory', JSON.stringify(history));
            });
            state = [];
            localStorage.setItem('tasks', JSON.stringify(state));
            break;
        default:
            saveTaskInStorage(state)
            return state.sort(sortCompare);
    }

    return state.sort(sortCompare);
}



function saveTaskInStorage(state) {
    localStorage.setItem('tasks', JSON.stringify(state));
}