const ageUp = (val) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(ageUpAsync(val))
        }, 2000)
    }
};

const ageUpAsync = (val) => ({type: 'AGE_UP', value: val});
const ageDown = (val) => ({type: 'AGE_DOWN', value: val});
const delItem = (key) => ({type: 'DEL_ITEM', key: key});

module.exports = {
    ageUp,
    ageDown,
    delItem
}