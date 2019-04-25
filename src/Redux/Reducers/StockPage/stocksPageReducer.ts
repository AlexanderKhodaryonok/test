import { IStock, IStocksState } from './interfaces'
import { handleActions } from 'redux-actions';
import { setStockId, setShowMode } from '../../actionCreators/stockPageActionCreators';


export const initialState = {
	isShowMyStocks: true,
	currentStockId: '',
	stocks: [
		{
			id: '1',
			name: 'APPL',
			count: 150,
			price: 105.67,
			growth: '9.23%',
			isAdded: true,
			data: [1, 2, 3, 2, 6, 4, 7, 4, 8]
		},
		{
			id: '2',
			name: 'TWTR',
			count: 80,
			price: 15.91,
			growth: '-0.92%',
			isAdded: false,
			data: [10, 11, 8, 6, 6, 4, 5, 4, 2]
		},
		{
			id: '3',
			name: 'TSLA',
			count: 75,
			price: 227.75,
			growth: '5.17%',
			isAdded: true,
			data: [1, 2, 3, 2, 6, 4, 5, 5, 6]
		},
		{
			id: '4',
			name: 'FB',
			count: 110,
			price: 113.05,
			growth: '4.25%',
			isAdded: false,
			data: [2, 4, 6, 7, 3, 4, 6, 7, 4, 6]
		},
		{
			id: '5',
			name: 'NFLX',
			count: 110,
			price: 98.36,
			growth: '6.86%',
			isAdded: false,
			data: [1, 2, 3, 3, 4, 6, 5, 3, 6]
		},
		{
			id: '6',
			name: 'F',
			count: 50,
			price: 13.08,
			growth: '-7.29%',
			isAdded: true,
			data: [11, 9, 10, 7, 7, 8, 9, 6, 4]
		}
	]
}

const stocksReducer = handleActions({

	[setStockId.toString()]: (state: IStocksState, {payload: id}: any) => {
         return { ...state, currentStockId: id }
	 },

	 [setShowMode.toString()]: (state: IStocksState, {payload: bool}: any) => {
		return {...state, isShowMyStocks: bool}
	 }
	 
	
}, initialState);

export default stocksReducer