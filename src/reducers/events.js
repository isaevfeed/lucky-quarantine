import {
    addEvent,
    deleteEvent,
    editEvent,
} from './actions/events-action';

const events = [
    {
        type: 'sleep',
        subtitle: 'Wake up',
        content: null,
        time: '8:00',
    },
    {
        type: 'food',
        subtitle: 'Breakfast',
        content: 'Eggs and meet',
        time: '9:00',
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
        case addEvent.toString():
            state = [...state, action.payload];
        break;
        case deleteEvent.toString():
            state = state.filter(event => event.id !== action.payload);
        break;
        case editEvent.toString():
            state = state.map(event => {
                if (event.id === action.payload.id) {
                    return action.payload;
                }
            });
        break;
    }

    return state;
}