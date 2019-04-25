export interface IStock {
	id: any
	name: any
	count: any
	price: any
	growth: any
	isAdded: any
	data: any[]
}

export interface IStocksState {
	currentStockId?: any
	stocks?: any
}