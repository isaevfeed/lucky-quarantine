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
            return state;
        case 'COMPLETE':
            state = state.map(task => {
                if (task.id == payload.id) {
                    task.status = !task.status;
                }
                return task;
            });
            saveTaskInStorage(state)
            return state;
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
            return state;
        default:
            saveTaskInStorage(state)
            return state;
    }
}

function saveTaskInStorage(state) {
    localStorage.setItem('tasks', JSON.stringify(state));
}