const initialState = {
    b: 1
};

const reducer = (state = initialState, action) => {
    const newState = {...state}

    switch(action.type){
        case 'UPDATE_B':
            newState.b += action.value
            break;
        default:
            break;
    }

    return newState;
}

export default reducer;