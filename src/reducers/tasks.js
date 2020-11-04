const tasks = [
    {
        id: 1,
        task: 'Купить хлеба',
        amount: 3,
        status: false,
    },
    {
        id: 2,
        task: 'Задача 2',
        amount: 0,
        status: false,
    },
    {
        id: 3,
        task: 'Задача 3',
        amount: 3,
        status: true,
    },
    {
        id: 4,
        task: 'Задача 3',
        amount: 3,
        status: true,
    },
    {
        id: 5,
        task: 'Задача 3',
        amount: 3,
        status: true,
    },
    {
        id: 6,
        task: 'Задача 3',
        amount: 3,
        status: true,
    },
    {
        id: 7,
        task: 'Задача 3',
        amount: 3,
        status: true,
    },
    {
        id: 8,
        task: 'Задача 3',
        amount: 3,
        status: true,
    },
    {
        id: 9,
        task: 'Задача 3',
        amount: 3,
        status: true,
    },
];

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
        default:
            saveTaskInStorage(state)
            return state;
    }
}

function saveTaskInStorage(state) {
    localStorage.setItem('tasks', JSON.stringify(state));
}