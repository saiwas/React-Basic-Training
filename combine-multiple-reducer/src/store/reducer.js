const initialState = {
    a: 1,
    b: 1
};

const reducer = (state = initialState, action) => {
    const newState = {...state}

    switch(action.type){
        case 'UPDATE_A':
            newState.a += newState.b
            break;
        case 'UPDATE_B':
            newState.b += newState.a
            break;
        default:
            break;
    }

    return newState;
}

export default reducer;