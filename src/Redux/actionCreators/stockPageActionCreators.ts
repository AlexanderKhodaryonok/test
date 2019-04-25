import {createAction} from "redux-actions";

export const setStockId = createAction<string>('TEST/STOCK_PAGE/SET_STOCK_ID');
export const setShowMode = createAction<boolean>('TEST/STOCK_PAGE/SET_SHOW_MODE');