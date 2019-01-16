const initialState = {
    name: 'Johnny',
    age: 21
};

const reducer = (state = initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'AGE_UP':
            ++newState.age
            break;
        case 'AGE_DOWN':
            --newState.age
            break;
        default:
            break;
    }

    return newState;
};

export default reducer;
