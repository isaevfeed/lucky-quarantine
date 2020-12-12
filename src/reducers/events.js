const events = [
    {
        type: 'sleep',
        subtitle: 'Wake up',
        content: null,
        time: '8:00',
    },
    {
        type: 'food',
        subtitle: 'Break',
        content: null,
        time: '21:05',
    },
];

export default function(state = events, action) {
    switch(action.type) {
        default:
            return state
    }
}