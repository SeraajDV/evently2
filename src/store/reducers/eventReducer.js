const initState = {
    events: [
        {id: '1', title: 'Freaky Friday', description: 'blah blah blah'},
        {id: '2', title: 'Music Festival', description: 'blah blah blah'},
        {id: '3', title: 'Night Club', description: 'blah blah blah'}
    ]
}

const eventReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_EVENT':
            console.log('create event', action.event);
            return state;
        case 'CREATE_EVENT_ERROR':
            console.log('create event error', action.err);
            return state;
        default:
            return state;
    }
    return state;
}

export default eventReducer;