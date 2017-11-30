import {takeEvery} from 'redux-saga';
import {call,put} from 'redux-saga/effects';
import {types,actions} from '../modules/listsRedux';
import {lists as listsSrvice} from '../services'
//import {lists as listsSrvice,authentication} from '../services'

const listsFetch=function* listsFetch(action){
    let service=new listsSrvice();
    console.log('fetch list saga.')
    let lists=yield call([service,service.listsFetch]);
    console.log(lists)
    !!lists?
        yield put(actions.fetchListsSuccess(lists))
        :yield put(action.fetchListsfailed())
}


const listsWatchSagas=[
    takeEvery(types.FETCH_LISTS,listsFetch),
]

export default listsWatchSagas;