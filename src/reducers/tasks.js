const tasks = [];

export default function(state = tasks, payload) {
    if (localStorage && localStorage.getItem('tasks')) {
        const localTasks = localStorage.getItem('tasks');
        if (localTasks != '' && localTasks != '[]') {
            state = JSON.parse(localTasks);
        }
    }
    
    switch(payload.type) {
        case 'ADD':
            state = [...state, payload.task];
            saveTaskInStorage(state)
            break;
        case 'COMPLETE':
            state = state.map(task => {
                if (task.id == payload.id) {
                    task.status = !task.status;
                }
                return task;
            });
            saveTaskInStorage(state)
            break;
        case 'CLEAR':
            localStorage.setItem('tasksHistory', JSON.stringify([]));
            state.map(task => {
                let history = JSON.parse(localStorage.getItem('tasksHistory'));
                
                if (history.indexOf(task.title) === -1) {
                    history.push(task.title);
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

function sortCompare(a, b) {
    const statusA = +a.status;
    const statusB = +b.status;

    if (statusA < statusB) {
        return -1;
    } 

    return 1;
}

function saveTaskInStorage(state) {
    localStorage.setItem('tasks', JSON.stringify(state));
}