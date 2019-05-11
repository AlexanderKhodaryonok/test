import stocksReducer from './stocksPageReducer';
import { setStockId,
  setShowMode,
  setFilter,
  moveStock,
  setStatus,
  setStocks } from '../../actionCreators/stockPageActionCreators';
import { statuses } from '../../../helpers/statuses/statuses';

export interface IStock {
  id: string;
  name: string;
  count: number;
  price: number;
  growth: string;
  isAdded: boolean;
  data: number[];
}

export interface IStocksState {
  status: string;
  currentStockId: string;
  stocks: IStock[];
  filter: string;
  isShowMyStocks: boolean;
}

describe('stocksPageReducers', () => {
  // how to set types for this test?
  // it('should return the initial state', () => {
  //   expect(stocksReducer(undefined, {})).toEqual(
  //     {
  //       status: statuses.init,
  //       filter: '',
  //       isShowMyStocks: false,
  //       currentStockId: '',
  //       stocks: [],
  //     }
  //   )
  // })

  it('id is set correctly', () => {
    const newState: IStocksState = stocksReducer({
      status: statuses.init,
      filter: '',
      isShowMyStocks: false,
      currentStockId: '',
      stocks: [],
    }, setStockId('3'));
    expect(newState.currentStockId).toEqual('3');
  });

  it('showMode is set correctly', () => {
    const newState: IStocksState = stocksReducer({
      status: statuses.init,
      filter: '',
      isShowMyStocks: false,
      currentStockId: '',
      stocks: [],
    }, setShowMode(true));
    expect(newState.isShowMyStocks).toEqual(true);
  });

  it('setFilter is set correctly', () => {
    const newState: IStocksState = stocksReducer({
      status: statuses.init,
      filter: '',
      isShowMyStocks: false,
      currentStockId: '',
      stocks: [],
    }, setFilter('stock'));
    expect(newState.filter).toEqual('stock');
  });

  it('stock is added/removed correctly', () => {
    const newState: IStocksState = stocksReducer({
      status: statuses.init,
      filter: '',
      isShowMyStocks: false,
      currentStockId: '',
      stocks: [{
        id: '111111',
        name: 'APPL',
        count: 150,
        price: 105.67,
        growth: '9.23%',
        isAdded: true,
        data: [1, 2, 3, 2, 6, 4, 7, 4, 8],
      }],
    }, moveStock({ bool: false, id: '111111' }));
    expect(newState.stocks[0].isAdded).toEqual(false);
  });

  it('status is set correctly', () => {
    const newState: IStocksState = stocksReducer({
      status: statuses.init,
      filter: '',
      isShowMyStocks: false,
      currentStockId: '',
      stocks: [],
    }, setStatus(statuses.inProgress));
    expect(newState.status).toEqual(statuses.inProgress);
  });

  it('stocks is set correctly', () => {
    const newState: IStocksState = stocksReducer({
      status: statuses.init,
      filter: '',
      isShowMyStocks: false,
      currentStockId: '',
      stocks: [],
    }, setStocks(
      { stocks: [{ id: '1' }] },
    ));
    expect(newState.stocks).toEqual([{
      id: '1',
    }]);
  });

});
