import { combineReducers, createStore } from "redux";
import stocksReducer from './StockPage/stocksReducer'

const rootReducer = combineReducers({
    stocksPage: stocksReducer
});

const store = createStore(rootReducer);

export default store;