import {applyMiddleware,createStore,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas'
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';
import rootReducer from '../modules';


const middlewares=[]
const sagaMiddleware=createSagaMiddleware();

export const history = createHistory();

const routerMw = routerMiddleware(history);


if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger')
    middlewares.push(logger)
}

middlewares.push(sagaMiddleware,routerMw);

const configureStore=()=>{
    const store=createStore(
        rootReducer,
        compose(
            applyMiddleware(...middlewares)
        )
    )
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;