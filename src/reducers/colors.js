const colors = {
    'food': '#BDFBFF',
    'break': '#C2FFBD',
    'sleep': '#E7E7E7',
    'task': '#FEFFBD',
    'lesson': '#FEBDFF',
    'job' : '#FFBDBD',
};

export default function(state = colors, payload) {
    switch(payload.type) {
        default: 
            return state;
    }
}