import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import stocksPageReducer from './StockPage/stocksPageReducer'
import createSagaMiddleware from 'redux-saga'
import { wathcerSaga } from "../sagas/stockPageSagas";

const rootReducer = combineReducers({
    stocksPage: stocksPageReducer
});

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
)

sagaMiddleware.run(wathcerSaga)    

export default store;