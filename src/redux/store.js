import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import rootRedusers from './modules';

const configureStore = (redusers = {}, preLoadedState = {}, middlewares = [] ) => createStore(
    combineReducers({
        ...rootRedusers,
        ...redusers
    }),
    preLoadedState,
    compose(
        applyMiddleware(
            ...middlewares,
            thunk,
            reduxLogger
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default configureStore