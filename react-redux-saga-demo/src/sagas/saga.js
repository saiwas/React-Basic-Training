// import { delay } from 'redux-saga';
import { takeEvery, put, delay } from 'redux-saga/effects';

function* ageUpAsync() {
    yield delay(3000);
    yield put({type: 'AGE_UP_ASYNC', value: 2});
}

export function* watchAgeUp() {
    //watching the event
    yield takeEvery('AGE_UP', ageUpAsync);
}
