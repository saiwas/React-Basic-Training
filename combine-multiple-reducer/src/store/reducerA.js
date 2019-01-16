const initialState = {
    a: 1
};

const reducer = (state = initialState, action) => {
    const newState = {...state}

    switch(action.type){
        case 'UPDATE_A':
            newState.a += action.value
            break;
        default:
            break;
    }

    return newState;
}

export default reducer;