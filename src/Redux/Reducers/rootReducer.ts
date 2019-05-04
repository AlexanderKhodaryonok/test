import { combineReducers, createStore, applyMiddleware } from "redux";
import stocksPageReducer from './StockPage/stocksPageReducer'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from "../sagas/stockPageSagas";

const rootReducer = combineReducers({
    stocksPage: stocksPageReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(watcherSaga)    

export default store;