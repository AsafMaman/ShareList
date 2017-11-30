import {takeEvery} from 'redux-saga'
import {call,put} from 'redux-saga/effects'
import {push } from 'react-router-redux'
import {types} from '../modules/authenticationRedux'
import {authentication} from '../services'
import utils from '../commons/utils'

const loginRequest=function* loginRequest(action){
    var service=new authentication()
    var auth=yield call([service,service.login],action.payload.user,action.payload.password)
    if(auth && auth.token){
        yield put({type:types.LOGIN_SUCCESS,payload:{
            token:auth.user.token,
            userId:auth.user.userId,
            userName:auth.user.userName,
            email:auth.user.email,
        }})
        utils.token=auth.token
        yield put(push('/app'))
    }
    else{
        yield put({type:types.LOGIN_FAILED})
    }
}


const authenticationSagas=[
    takeEvery(types.LOGIN_REQUEST,loginRequest),
]

export default authenticationSagas;