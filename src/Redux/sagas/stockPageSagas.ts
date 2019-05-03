import { takeEvery, put, select } from "@redux-saga/core/effects";
import { setStatus, setStocks, moveStock } from "../actionCreators/stockPageActionCreators";
import { statuses } from "../../helpers/statuses/statuses";
import { getStocksRequest, setStocksRequest } from "../../services/stockPageService";

export function* getStocksSaga(): any {
    yield put(setStatus(statuses.inProgress))
    let responce = yield getStocksRequest();
    yield put(setStocks(responce.data))
    yield put(setStatus(statuses.success))
};

export function* sendStocksSaga(action: any): any {
    yield put(moveStock(action.payload))
    const state = yield select();
    debugger
    yield put(setStatus(statuses.inProgress))
    yield setStocksRequest(state.stocksPage.stocks);
    yield put(setStatus(statuses.success))
};

export function* watcherSaga(): any {
    yield takeEvery("TEST/STOCK_PAGE/GET_STOCKS", getStocksSaga);
    yield takeEvery("TEST/STOCK_PAGE/SEND_STOCKS", sendStocksSaga);
};