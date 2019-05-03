import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import stocksPageReducer from './StockPage/stocksPageReducer'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from "../sagas/stockPageSagas";

const rootReducer = combineReducers({
    stocksPage: stocksPageReducer
});

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//     rootReducer,
//     compose(applyMiddleware(sagaMiddleware),
//         (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
//     )
// )

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(watcherSaga)    

export default store;