import stocksReducer from "./stocksPageReducer";
import { setStockId, setShowMode, setFilter, moveStock, setStatus, setStocks } from "../../actionCreators/stockPageActionCreators";
import { statuses } from '../../../helpers/statuses/statuses';

it('id is set correctly', () => {
  let newState = stocksReducer({
    currentStockId: '',
  }, setStockId('3'));
  expect(newState.currentStockId).toEqual('3');
});

it('showMode is set correctly', () => {
  let newState = stocksReducer({
    isShowMyStocks: false,
  }, setShowMode(true));
  expect(newState.isShowMyStocks).toEqual(true);
});

it('setFilter is set correctly', () => {
  let newState = stocksReducer({
    filter: '',
  }, setFilter('stock'));
  expect(newState.filter).toEqual('stock');
});

it('stock is added/removed correctly', () => {
  let newState = stocksReducer({
    stocks: [{
      id: '3',
      isAdded: false,
    },]
  }, moveStock({ bool: true, id: '3' }));
  expect(newState.stocks[0].isAdded).toEqual(true);
});

it('status is set correctly', () => {
  let newState = stocksReducer({
    status: statuses.init,
  }, setStatus(statuses.inProgress));
  expect(newState.status).toEqual(statuses.inProgress);
});

it('stocks is set correctly', () => {
  let newState = stocksReducer({
    stocks: []
  }, setStocks(
    { stocks: [{ a: 'qwe' }] }
  ));
  expect(newState.stocks).toEqual([{
    a: 'qwe'
  }]);
});
