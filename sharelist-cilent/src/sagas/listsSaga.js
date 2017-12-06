import {takeEvery} from 'redux-saga/effects'
import {call,put} from 'redux-saga/effects'
import {types,actions} from '../modules/listsRedux'
import {lists as listsSrvice} from '../services'
//import {lists as listsSrvice,authentication} from '../services'

const fetchList=function* fetchList(action){
    let service=new listsSrvice()
    let lists=yield call([service,service.listsFetch])
    console.log(lists)
    !!lists?
        yield put(actions.fetchListsSuccess(lists))
        :yield put(action.fetchListsfailed())
}

const createList=function* createList(action){
    let service = new listsSrvice()
    console.log('saga create list:' +action)
    var list =yield call([service,service.createList],action.payload)
}

export function* fetchListWatch(){
    yield takeEvery(types.FETCH_LISTS,fetchList)
}

export function* createListWatch(){
    yield takeEvery(types.CREATE_LIST,createList)
}
