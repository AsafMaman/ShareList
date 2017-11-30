import { all } from 'redux-saga/effects'
import authenticationSagas from './authenticationSaga'
import lists from './listsSaga'

export default function* root(){
    console.log('Root Saga');
    yield all([
        ...authenticationSagas,
        ...lists
    ])
}