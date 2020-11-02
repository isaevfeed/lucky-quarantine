const events = [
    {
        type: 'food',
        subtitle: 'Wake up',
        content: null,
        time: 'at 8:00am',
    }
];

export default function(state = events, payload) {

    switch(payload.type) {
        default:
            return state
    }
}