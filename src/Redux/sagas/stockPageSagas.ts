import { takeEvery, put, select } from '@redux-saga/core/effects';
import { setStatus, setStocks, moveStock } from '../actionCreators/stockPageActionCreators';
import { statuses } from '../../helpers/statuses/statuses';
import { getStocksRequest, setStocksRequest } from '../../services/stockPageService';

export function* getStocksSaga() {
  try {
    yield put(setStatus(statuses.inProgress));
    const responce = yield getStocksRequest();
    yield put(setStocks(responce.data));
    yield put(setStatus(statuses.success));
  } catch (error) {
    return console.log(`getStocksRequest ${error.message}`);
  }
}

export function* sendStocksSaga(action: any) {
  try {
    yield put(moveStock(action.payload));
    const state = yield select();
    yield put(setStatus(statuses.inProgress));
    yield setStocksRequest(state.stocksPage.stocks);
    yield put(setStatus(statuses.success));
  } catch (error) {
    return console.log(`setStocksRequest ${error.message}`);
  }
}

export function* watcherSaga() {
  yield takeEvery('TEST/STOCK_PAGE/GET_STOCKS', getStocksSaga);
  yield takeEvery('TEST/STOCK_PAGE/SEND_STOCKS', sendStocksSaga);
}
