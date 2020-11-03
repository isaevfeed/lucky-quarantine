const images = {
    'food': 'burger',
    'break': 'clock',
    'sleep': 'clock',
    'task': 'puzzle-pieces',
    'lesson': 'contract',
    'job' : 'salary',
};

export default function(state = images, payload) {
    switch(payload.type) {
        default:
            return state;
    }
}