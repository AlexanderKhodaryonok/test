import { createAction } from 'redux-actions';

export const setStockId = createAction('TEST/STOCK_PAGE/SET_STOCK_ID');
export const setShowMode = createAction('TEST/STOCK_PAGE/SET_SHOW_MODE');
export const setFilter = createAction('TEST/STOCK_PAGE/SET_FILTER');
export const moveStock = createAction('TEST/STOCK_PAGE/MOVE_STOCK');
export const setStatus = createAction('TEST/STOCK_PAGE/SET_STATUS');
export const getStocks = createAction('TEST/STOCK_PAGE/GET_STOCKS');
export const setStocks = createAction('TEST/STOCK_PAGE/SET_STOCKS');
export const sendStocks = createAction('TEST/STOCK_PAGE/SEND_STOCKS');
