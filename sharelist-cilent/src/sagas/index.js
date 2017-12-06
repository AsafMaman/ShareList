import { all } from 'redux-saga/effects'
import * as authentication from './authenticationSaga'
import * as lists from './listsSaga'

const sagas={
    ...authentication,
    ...lists
}

const ActivatedSagas=Object.values(sagas).map(s=>s())
export default function* root(){
    yield all(ActivatedSagas)    
}