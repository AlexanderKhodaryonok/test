import { takeLatest, takeEvery, put } from "@redux-saga/core/effects";

function* getStocks(): any {
	const stocks = yield ('url');
    //yield put(getStocks(stocks));
}

export function* wathcerSaga() {
	yield takeEvery("TEST/STOCK_PAGE/GET_STOCKS", getStocks);
  }