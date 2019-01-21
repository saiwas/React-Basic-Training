const initialState = {
    name: 'Johnny',
    age: 21,
    changeHistory: []
};

const reducer = (state = initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'AGE_UP_ASYNC':
            newState.age += action.value;
            newState.changeHistory = state.changeHistory.concat({
                key: Math.random(),
                name: newState.name,
                age: newState.age
            });
            break;
        case 'AGE_DOWN':
            newState.age -= action.value;
            newState.changeHistory = state.changeHistory.concat({
                key: Math.random(),
                name: newState.name,
                age: newState.age
            });
            break;
        case 'DEL_ITEM':
            newState.changeHistory = state.changeHistory.filter(el => el.key !== action.key)
            break;
        default:
            break;
    }

    return newState;
};

export default reducer;
