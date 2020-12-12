const images = {
    'food': 'burger',
    'break': 'clock',
    'sleep': 'clock',
    'task': 'puzzle-pieces',
    'lesson': 'contract',
    'job' : 'salary',
};

export default function(state = images, action) {
    switch(action.type) {
        default:
            return state;
    }
}