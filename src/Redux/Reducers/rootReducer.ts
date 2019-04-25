import { combineReducers, createStore } from "redux";
import stocksPageReducer from './StockPage/stocksPageReducer'

const rootReducer = combineReducers({
    stocksPage: stocksPageReducer
});

const store = createStore(rootReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
(window as any).__REDUX_DEVTOOLS_EXTENSION__());

export default store;