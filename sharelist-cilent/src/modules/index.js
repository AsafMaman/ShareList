import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {routerReducer} from 'react-router-redux'
import authentication from './authenticationRedux'
import lists from './listsRedux'


const rootReducer=combineReducers({
    form:formReducer,
    router:routerReducer,
    authentication,
    lists
})

export default rootReducer;