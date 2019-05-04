import { IStocksState } from './interfaces'
import { handleActions } from 'redux-actions';
import { setStockId, setShowMode, setFilter, moveStock, setStatus, setStocks } from '../../actionCreators/stockPageActionCreators';
import { statuses } from '../../../helpers/statuses/statuses';
import { findCurrentStock } from '../../../helpers/functions/functions';

export const initialState: IStocksState = {
	status: statuses.init,
	filter: '',
	isShowMyStocks: false,
	currentStockId: '',
	stocks: []
}

const stocksReducer = handleActions({
	
	[setStockId.toString()]: (state: IStocksState, { payload: id }: any): IStocksState => {
		return { ...state, currentStockId: id }
	},

	[setShowMode.toString()]: (state: IStocksState, { payload: bool}: any): IStocksState => {
		return { ...state, isShowMyStocks: bool }
	},

	[setFilter.toString()]: (state: IStocksState, { payload: stockName }: any): IStocksState => {
		return { ...state, filter: stockName }
	},

	[setStatus.toString()]: (state: IStocksState, { payload: status }: any): IStocksState => {
		return { ...state, status }
	},

	[setStocks.toString()]: (state: IStocksState, { payload: { stocks } }: any): IStocksState => {
		return { ...state, stocks }
	},

	[moveStock.toString()]: (state: IStocksState, { payload: {bool, id} }: any): IStocksState => {
		let stateCopy = { ...state, stocks: [...state.stocks] }
		let index: number = findCurrentStock(stateCopy, id)
		stateCopy.stocks[index].isAdded = bool;
		return stateCopy
	},

}, initialState);

export default stocksReducer