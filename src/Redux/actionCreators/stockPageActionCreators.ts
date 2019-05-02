import {createAction} from "redux-actions";

export const setStockId = createAction<string>('TEST/STOCK_PAGE/SET_STOCK_ID');
export const setShowMode = createAction<boolean>('TEST/STOCK_PAGE/SET_SHOW_MODE');
export const setFilter = createAction<string>('TEST/STOCK_PAGE/SET_FILTER');
export const moveStock = createAction<boolean>('TEST/STOCK_PAGE/MOVE_STOCK');
export const setStatus = createAction<string>('TEST/STOCK_PAGE/SET_STATUS');