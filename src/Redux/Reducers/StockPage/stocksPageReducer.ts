import { IStock, IStocksState } from './interfaces'
import { handleActions } from 'redux-actions';
import { setStockId, setShowMode, setFilter, moveStock, setStatus, setStocks } from '../../actionCreators/stockPageActionCreators';
import { statuses } from '../../../helpers/statuses/statuses';

export const initialState: IStocksState = {
	status: statuses.init,
	filter: '',
	isShowMyStocks: false,
	currentStockId: '',
	stocks: []
}

//put into helpers
//how to add type to state (in parameters)?
const findCurrentStock = (state: any, id: string): number => {
	let index: number = 0;
	state.stocks.find((stock: IStock, idx: number) => {
		if (stock.id === id) index = idx
	})
	return index;
}

const stocksReducer = handleActions({
	
	[setStockId.toString()]: (state: IStocksState, { payload: id }: any) => {
		return { ...state, currentStockId: id }
	},

	[setShowMode.toString()]: (state: IStocksState, { payload: bool}: any) => {
		debugger
		return { ...state, isShowMyStocks: bool }
	},

	[setFilter.toString()]: (state: IStocksState, { payload: stockName }: any) => {
		return { ...state, filter: stockName }
	},

	[setStatus.toString()]: (state: IStocksState, { payload: status }: any) => {
		return { ...state, status }
	},

	[setStocks.toString()]: (state: IStocksState, { payload: { stocks } }: any) => {
		return { ...state, stocks }
	},

	[moveStock.toString()]: (state: IStocksState, { payload: {bool, id} }: any) => {
		debugger
		let stateCopy = { ...state, stocks: [...state.stocks] }
		let index: number = findCurrentStock(stateCopy, id)
		stateCopy.stocks[index].isAdded = bool;
		return stateCopy
	},

}, initialState);

export default stocksReducer